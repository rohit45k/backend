import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect = async() => {
    await mongoose.connect(process.env.Connection_String)
    .then(()=>{
        console.log("DataBase connected");
    })
    .catch((error)=>{
        console.log("Connection failed");
    })

}
connect()