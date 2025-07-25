import { Request , Response } from "express";
import {movieModel} from "../models/movie";
import Logger from "../../config/logger";

export async function createMovie(req:Request , res: Response){
    try {
         const data = req.body
         if(!data){
            return res.status(400).json({message:'Não foi passado as informações para cadastrar o filme'})
         }
         const movie = await movieModel.create(data)
         if(!movie){
            return res.status(400).json({message:"Erro na hora de cadastrar! tente novamente"})
         }
         return res.status(200).json({success:true ,  movie:movie})
    } catch (error:any) {
        Logger.error('Erro para registrar filme' , error.message)
        return res.status(500).json({success:false , message:'Erro no server para cadastrar filme'})
    }
}

export async function getMovieById(req:Request , res:Response){
    try {
         const {id}= req.params
         if(!id){
            return res.status(400).json({message:'Não foi passado o ID para busca'})
         }
         const idMovie = await movieModel.findById(id)
         if(!idMovie){
            return res.status(400).json({message:"Não foi encontrado o filme que possui esse ID"})
         }
         return res.status(200).json({success:true , movie: idMovie})
    } catch (error) {
        Logger.error('Erro para pegar o filme por ID')
        return res.status(500).json({message:'Erro no server'})
  }
}

export async function getAllMovie(req:Request , res:Response){
     try {
        const allMovie = await movieModel.find()
        if(!allMovie || allMovie.length === 0){
            return res.status(400).json({message:'Nenhum filme encontrado na busca! tente novamente'})
        }
        return res.status(200).json({message:'Sucesso' , movies: allMovie})
     } catch (error) {
        Logger.error('Erro para listar todos os filmes' , error)
        return res.status(500).json({message:"Erro interno no servidor"})
     }
}

export async function deleteMovie(req:Request , res:Response){
     try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({message:'não foi passado nenhum ID'})
        }
        const movieDelete = await movieModel.findByIdAndDelete(id)
        if(!movieDelete){
            return res.status(400).json({message:'Não foi possivel deletar esse filme'})
        }
        return res.status(200).json({message:'Deletado com sucesso' , movie:movieDelete})
     } catch (error) {
        Logger.error('Erro para deletar filme' ,error)
        return res.status(500).json({message: "Erro interno no servidor"})
     }
}

export async function updateMovie(req:Request , res:Response){
    try {
        const {id} = req.params
        const body = req.body
        
        if(!id){
          return res.status(400).json({message:'Não foi passado o parametro'})
        }
       
        const updateMovie = await movieModel.findByIdAndUpdate(id , body)
        if(!updateMovie){
          return res.status(400).json({message:'Não foi possivel dazer a atualização '})
        }
        return res.status(200).json({message:'Sucesso' , success:true , body})
    } catch (error) {
        Logger.error('Erro para atualizar filme' , error)
        return res.status(500).json({message:'Erro interno no server para atualizar filme' , success:false})
    }
}