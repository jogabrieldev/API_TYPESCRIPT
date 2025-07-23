import { Router , Request , Response} from "express";
import { createMovie , getMovieById , getAllMovie  , deleteMovie , updateMovie } from "./controller/movieController";
import {validate} from "../src/middleware/handleValidators"
import { movieCreate } from "./middleware/movieValidators";

const router = Router()


    router.get('/',(req:Request , res:Response)=>{
      res.status(200).json({
        message:'Rota raiz deu certo!'
       })
     })

    router.post('/create' , movieCreate(), validate, (req:Request , res:Response)=>{
          createMovie(req ,res)
     })  

    router.get('/movie/:id' , (req:Request , res:Response)=>{
        getMovieById(req ,res)
    })

    router.get('/allmovie' ,(req:Request , res:Response)=>{
       getAllMovie(req ,res)
    })

    router.delete('/movie/:id', (req:Request , res: Response)=>{
       deleteMovie(req ,res)
    })

    router.patch('/movie/:id' , movieCreate(),validate, (req:Request , res:Response)=>{
       updateMovie(req ,res)
    })
 
    

export default router

