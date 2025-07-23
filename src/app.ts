
import dotenv from 'dotenv';
dotenv.config();

import  express  from "express"
import  config  from "config"
import routesSystem from "./router"
import connectDb from "../config/dataBase"
import Logger from '../config/logger'
import morganMiddleware from './middleware/morganMiddleware';

const app = express()

app.use(express.json())

app.use(morganMiddleware)
app.use("/api/" , routesSystem)



const port = config.get<number>('port')
app.listen(port, async()=>{
    await connectDb()
    Logger.info('sever reload on port 3000')
})