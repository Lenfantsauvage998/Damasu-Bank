import express from "express";
import dotenv from 'dotenv';
import connectToMongo from "./database/config.js"
import routerUsers from "./routes/users.js"
import cors from 'cors'
import routerCdt from './routes/cdt.route.js'

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors());


app.use('/users', routerUsers)
app.use('/cdt',routerCdt);

const PORT = process.env.PORT ;

app.listen(PORT, ()=>{
    console.log("Sevidor ejecutandose en el puerto", PORT)
})
connectToMongo()



