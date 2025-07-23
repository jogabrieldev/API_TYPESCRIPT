import mongoose from "mongoose";
import config  from "config";

async function connectDb() {
     
    const dbUri = config.get<string>("dbUri")

    try {
          await mongoose.connect(dbUri)
         console.log('conecetou no banco')
    } catch (error) {
        console.log("Não foi possivel conectar" , error)
    }
}

export default connectDb