import Joi from "joi";
import passwordComplexity from 'joi-password-complexity'
const  ValidationRegister =(signup:{email:string, password:string}) =>{
    const signUp = Joi.object({
        email:Joi.string().email().required().label('Email'),
    password: Joi.string()
     .min(6)
    }).label('password').label('password').messages({"string.min":"Password must have six characters"})
    return signUp.validate(signup,{errors:{label:'key',wrap:{label:false}}, abortEarly:false, messages:({'jj':'kk'})}  )
}

  const  ValidationLogin =(Login:{email:string, password:string}) =>{
    const login = Joi.object({
        email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
       password: Joi.string().message('Email is required').label('Email')
         .min(6)
    }).message('Password should be six char').label('password')
    return  login.validate(Login)
}


 export default ValidationRegister

