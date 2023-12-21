 import {validationResult} from 'express-validator'
 import userDamasuSchema from '../models/users.models.js'
 import bcrypt from 'bcrypt'
 import jwt from 'jsonwebtoken'

const validacion = async (req, res , next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    
    next()
} 

/*----------------------------------*/

const validacionLogin = async (req, res , next) => {
    try{

    const info = req.body //* Info del  email y contasena  // 

    const lookingfor = await userDamasuSchema.findOne({ email:info.email })

    const match = await bcrypt.compare(info.password, lookingfor.password);
    
    if(match) {
        
        req.body = lookingfor

    next()

    }else{
        return res.status(400).json("Verify your username and password")
    }
    
    
     }catch(err){
        console.error(err);
            res.status(400).json({ error: "User not found" })
     }
    
}

/*----------------------------------*/


const authVerification = (req, res, next) => {
    if(!req.headers['authorization']){
        return res.json({ error: "You have to submmit an autho ticket "})
    }

    let token = ""
    let authToken = req.headers['authorization']
    if (authToken.includes("Beaver")) {
        token = req.headers['authorization'].split(' ')[1];
    } else {
        token = req.headers['authorization']
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.body = decoded;
        console.log(decoded)
        next();
    } catch (error) {
        return res.json({ error: 'Token inválido' });
    }
}


/*-----------------------------------*/

const validacionEdad = (age) => {
    if (age < 18){
        throw new Error("You are not allowed due to your age")
}else{
    return true
}
}

const validacionEmail = async (email) => {
    const lookingfor = await userDamasuSchema.findOne({ email:email })
    if (!lookingfor){
        return true
    }else{
        throw new Error("That email address already exists")
    }
}

const validacionID = async (id) => {
    const lookingfor = await userDamasuSchema.findOne({ id:id })
    if (!lookingfor){
        return true
    }else{
        throw new Error("That ID already exists")
    }
}



export { validacion, validacionEdad, validacionEmail, validacionID, validacionLogin, authVerification }

