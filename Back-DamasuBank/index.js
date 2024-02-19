import express from "express";
import dotenv from 'dotenv';
import connectToMongo from "./database/config.js"
import routerUsers from "./routes/users.js"
import routerBalance from "./routes/balance.js"
import routerHistory from "./routes/history.js"
import routerApi from "./routes/Api.js";
import routerCDT from "./routes/CDT.js";
import cors from 'cors'
import routerCdt from './routes/cdt.route.js'

import { Server } from "socket.io";
import { createServer} from "node:http"

dotenv.config();
const app = express()

// const server = createServer(app)
// const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:4200",
//       methods: ["GET", "POST"],
//       allowedHeaders: ["my-custom-header"],
//       credentials: true
//     }
//   })


// const ws = io.on('connection', (socket) =>{
//     console.log("a user has connected")

//     socket.on('disconnect', () =>{
//       console.log("a user has disconnected")
//     })

//     socket.on('Id/Cedula', (msg) =>{
//       io.emit('Cedula Activa :' + msg)
//     })
// })

app.use(express.json())
app.use(cors());
app.use('/users', routerUsers)
app.use('/balance', routerBalance)
app.use('/records', routerHistory)
app.use('/api', routerApi)
app.use('/cdt', routerCDT)
app.use('/cdtx', routerCdt )



const PORT = process.env.PORT ;

app.listen(PORT, ()=>{
    console.log("Sevidor ejecutandose en el puerto", PORT)
})

connectToMongo()


// Server.listen(server)


// io.on('connection', (socket) =>{

//     const idHandShake = socket.id

//     console.log('a user has connected!')
// })




