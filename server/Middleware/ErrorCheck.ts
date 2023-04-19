import {NextFunction,Request,Response} from "express";

 export const ErrorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
  const statusCode =  res.statusCode ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    message:err,
    stack: process.env.NODE_ENV === 'production' ? null :err.stack

  })
}
