import express from "express";
import { usuarioRecordsGet, usuarioRecordsGetSpecific ,usuarioRecordPostRegistro , usuarioRecordDelete } from "../controllers/history.js";
import {authVerification } from "../middlewares/db.validator.js"
const routerHistory = express.Router()

/*-------------------------------------*/

routerHistory.get("/" ,usuarioRecordsGet)


routerHistory.get("/account" , authVerification , usuarioRecordsGetSpecific)


/*------------------------------------*/

routerHistory.post("/" ,usuarioRecordPostRegistro )

/*-------------------------------------*/

routerHistory.delete("/:id" ,usuarioRecordDelete )


export default routerHistory