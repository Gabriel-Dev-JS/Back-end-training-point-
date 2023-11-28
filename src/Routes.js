import { Router } from "express";

import LoginUsuario from './controllers/LoginUsuario.js'
import CadastrarUsuario from './controllers/CadastrarUsuario.js'
import Superiores from './controllers/superiores.js'

//import { UsuarioCadastradoError } from "./errors/UsuarioCadastradoError.js";

const routes = Router()

routes.post('/cadastro', async (req,res) =>{
    try {
        const foi = await CadastrarUsuario(req.body);
        return res.status(201).json(foi);
    } catch(error) {

        return res.status(400).json({ erro: error.message })

        /*if(error instanceof UsuarioCadastradoError) {
            return res.status(400).json({ erro: error.message })
        } else {
            return res.status(500).json({ erro: "Erro interno no servidor" });
        }*/
    }
});

routes.post('/login', async (req, res)=>{
    try{
        await LoginUsuario(req.body);
        return res.status(201).send("ok");
    }catch(err){
        return res.status(400).json({error: err.message})
    }
})

routes.post('/superiores',async(req,res)=>{
    try{
        await Superiores(req.body)
        return res.status(201).send("ok")
    }catch(err){
        return res.status(400).json({error: err.message})
    }
})

export default routes