import express from "express";
import { usuarioGet,usuarioGetLogIn , usuarioPost,usuarioDelete, usuarioPostLogIn ,usuarioPatrimonyUpdate,usuarioInvestedUpdate } from "../controllers/user.js"
import { check }  from "express-validator";
import {validacion, validacionEdad, validacionEmail, validacionID , validacionLogin , authVerification } from "../middlewares/db.validator.js"
const routerUsers = express.Router()

/*--------------------------------*/

routerUsers.get("/", usuarioGet)

/*-------------------------------*/

routerUsers.get("/account", authVerification , usuarioGetLogIn)

/*-------------------------------*/


routerUsers.post("/",[
    check("name", "Name is required").not().isEmpty(),
    check("age").custom(validacionEdad),
    check("id", "Must be a valid id").custom(validacionID),
    check("phoneNumber", "Must be a valid phone number").not().isEmpty(),
    check("address", "Address is required").not().isEmpty(),
    check("email", "Must be a valid email").custom(validacionEmail),
    check("password", "Password is required").not().isEmpty(),
    validacion
], usuarioPost)

/*----------------------------*/

routerUsers.post("/login",[
    check("email", "Must be a valid email").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    validacion,
    validacionLogin
], usuarioPostLogIn)

/*----------------------------*/

routerUsers.put("/update", usuarioPatrimonyUpdate)

/*---------------------------*/

routerUsers.put("/update/investments", usuarioInvestedUpdate)

/*--------------------------*/


routerUsers.delete("/delete/:id", usuarioDelete)

export default routerUsers