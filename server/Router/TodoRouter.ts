import express, { Response, Request, NextFunction } from "express";
import { body, validationResult, check } from "express-validator";

const Router = express.Router();
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { validate } from "../Middleware/ExpressValidator";
import ValidationRegister from "../Middleware/Validation";

const Prisma = new PrismaClient();
Router.get("/todos/:email", async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    const todo = await Prisma.todos.findMany({
      where: {
        email: email,
      },
      include: { author: true },
    });
    res.json(todo);
  } catch (e: any) {
    throw new Error(e);
  }
});

Router.post("/todos", async (req, res) => {
  const { title, progress, email, date } = req.body;
  try {
    const postData = await Prisma.todos.create({
      data: {
        title,
        progress,
        email,
        author: { connect: { email } },

        date,
      },
    });

    res.json(postData);
  } catch (e: any) {
    console.error(e.message);
  }
});
Router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, progress, email, date } = req.body;
  try {
    const updateTodo = await Prisma.todos.update({
      data: {
        title,
        email,
        progress,
        date,
      },
      where: {
        id,
      },
    });
    res.json(updateTodo);
  } catch (e: any) {}
});

Router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const salt   = 10
  try {



   await bcrypt.hash(password,salt).then(async hash => {
     const response =await Prisma.users.create({
       data: {
         email,
         hashPassword: hash
       }
     })
   return res.json(response)
     console.log(response)
   }).catch(e =>{
     if (e.code ==='P2002'){
       return res.status(400).json({detail:'Email should be unique'})
     }
     if(e){
       return res.status(400).json({detail:'Field is required'})
     }
   })





    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });
    res.json({ email, token });
    console.log(token);
  } catch (e: any) {
    if (e.code === "P2002") {

    }
  }
});
Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await Prisma.users.findMany({
      where: {
        email,
      },
    });
    if (!response.length) return res.json({ detail: "User does not exist " });
    const success = await bcrypt.compare(password, response[0].hashPassword);
    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });
    if (success) {
      res.json({ email: response[0].email, token });
    } else {
      res.json({ detail: "Login failed" });
    }
  } catch (e) {}
});

export default Router;
