import { body } from "express-validator";

export const movieCreate =()=> {
     return[
          body('tittle')
              .isString()
              .withMessage("O titulo e Obrigatorio")
              .isLength({min:5})
              .withMessage('O nome do filme tem que ter no minimo 5 caracteres'),

          body('rating')
           .isNumeric()
           .withMessage('Precisa ser o valor numerico')
           .custom((value:number)=>{
                if(value < 0 || value > 10){
                     throw new Error("A nota precisa ser entre 0 a 10")
                }
                return true
           }),

        body('description') 
        .isString()
        .withMessage('Descrição e obrigatoria'),

        body('director').isString().withMessage('Nome do diretor e obrigatorio')
     ]
}