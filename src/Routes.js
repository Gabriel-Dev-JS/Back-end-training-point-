import { Router } from "express";

import LoginUsuario from './controllers/LoginUsuario.js'
import CadastrarUsuario from './controllers/CadastrarUsuario.js'
import CriarExercicio from './controllers/CriarExercicio.js'
import { ListarExerciciosPorTipo } from "./controllers/ListarExerciciosPorTipo.js";
import { DeletarExercicio } from "./controllers/DeletarExercicio.js";

const routes = Router()

routes.post('/cadastro', async (req,res) =>{
    try {
        await CadastrarUsuario(req.body);
        return res.status(201).send();
    } catch(error) {
        return res.status(400).json({ erro: error.message })
    }
});

routes.post('/login', async (req, res)=>{
    try{
        const response = await LoginUsuario(req.body);
        return res.status(200).json(response);
    }catch(error){
        return res.status(400).json({error: error.message})
    }
})

routes.post('/exercicios',async(req,res)=>{
    try{
        await CriarExercicio(req.body)
        return res.status(201).send()
    }catch(error){
        return res.status(400).json({error: error.message})
    }
})

routes.get('/usuarios/:idUsuario/exercicios/:tipo', async (req, res) => {
    try{
        const response = await ListarExerciciosPorTipo(req.params)
        return res.status(200).json({exercicios: response})
    }catch(error){
        return res.status(400).json({error: error.message})
        
    }
})

routes.delete('/usuarios/:idUsuario/exercicios/:idExercicio', async (req,res) => {
    try{
        await DeletarExercicio(req.params)
        res.status(204).send()
    }catch(error){
        return res.status(400).json({error: error.message})
    }
})
export default routes