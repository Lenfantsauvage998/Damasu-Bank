import express from "express";
import { chatGpt, dalle3 } from "../controllers/Api.js";
const routerApi = express.Router()

/*-------------------------------------------------*/

routerApi.post("/" , chatGpt )

routerApi.post("/dalle3" , dalle3 )

export default routerApi