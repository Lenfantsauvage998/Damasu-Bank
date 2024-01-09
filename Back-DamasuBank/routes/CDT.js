import express from "express";
import {authVerification} from "../middlewares/db.validator.js"
import {usuarioCDTGet, usuarioCDTGetSpecific, usuarioCDTRegistro , usuarioCapitalUpdatePSE ,usuarioCDTDelete} from "../controllers/CDT.js"

const routerCDT = express.Router()

/*-------------------------------------*/

routerCDT.get("/" ,usuarioCDTGet)


routerCDT.get("/account" , authVerification , usuarioCDTGetSpecific)


/*------------------------------------*/

routerCDT.post("/" , authVerification, usuarioCDTRegistro)

/*-------------------------------------*/

routerCDT.put("/PSE" , authVerification, usuarioCapitalUpdatePSE)

/*-------------------------------------*/

routerCDT.delete("/:id" ,usuarioCDTDelete )


export default routerCDT