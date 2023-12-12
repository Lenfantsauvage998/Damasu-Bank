import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_HOST)
        console.log("Conexion establecida con la base de datos")
    }catch (error){
        console.log(error)
    }

}

export default connectToMongo