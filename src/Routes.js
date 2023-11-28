import { Router } from "express";

import LoginUsuario from './controllers/LoginUsuario.js'
import CadastrarUsuario from './controllers/CadastrarUsuario.js'
import Superiores from './controllers/superiores.js'


const routes = Router()

routes.post('/cadastro', async (req,res) =>{
    try {
        await CadastrarUsuario(req.body);
        return res.status(201).send("ok");
    } catch(error) {
        return res.status(400).json({ erro: error.message })
    }
});

routes.get('/login', async (req, res)=>{
    try{
        await LoginUsuario(req.body);
        return res.status(201).send("ok");
    }catch(error){
        return res.status(400).json({error: "erro"})
    }
})

routes.post('/superiores',async(req,res)=>{
    try{
        await Superiores(req.body)
        return res.status(201).send("ok")
    }catch(error){
        return res.status(400).json({error: err.message})
    }
})

export default routes