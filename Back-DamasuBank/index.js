import express from "express";
import dotenv from 'dotenv';
import connectToMongo from "./database/config.js"
import routerUsers from "./routes/users.js"
import routerBalance from "./routes/balance.js"
import routerHistory from "./routes/history.js"
import routerApi from "./routes/Api.js";
import routerCDT from "./routes/CDT.js";
import cors from 'cors'

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors());


app.use('/users', routerUsers)
app.use('/balance', routerBalance)
app.use('/records', routerHistory)
app.use('/api', routerApi)
app.use('/cdt', routerCDT)


const PORT = process.env.PORT ;

app.listen(PORT, ()=>{
    console.log("Sevidor ejecutandose en el puerto", PORT)
})
connectToMongo()



