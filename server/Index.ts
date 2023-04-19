import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


import Router from "./Router/TodoRouter";
import morgan from  'morgan'
import { ErrorHandler } from "./Middleware/ErrorCheck";
const app = express()
const PORT  = process.env.PORT || 4000


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(Router)
app.use(ErrorHandler)
app.use(morgan('dev'))
app.listen(PORT,()=>console.log(`server is connected  ${PORT}`))