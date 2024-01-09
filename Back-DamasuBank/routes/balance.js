import express from "express";
import { usuarioCapitalGet, usuarioCapitalGetSpecific ,usuarioCapitalPostRegistro, usuarioCapitalUpdate ,usuarioCapitalDelete } from "../controllers/balance.js";
import {authVerification } from "../middlewares/db.validator.js"
const routerBalance = express.Router()

/*-------------------------------------*/

routerBalance.get("/" ,usuarioCapitalGet )

routerBalance.get("/account" ,authVerification, usuarioCapitalGetSpecific )

/*------------------------------------*/

routerBalance.post("/" ,usuarioCapitalPostRegistro )

/*-------------------------------------*/

routerBalance.put("/" , authVerification, usuarioCapitalUpdate )

/*--------------------------------------*/


routerBalance.delete("/:id" ,usuarioCapitalDelete )


export default routerBalance