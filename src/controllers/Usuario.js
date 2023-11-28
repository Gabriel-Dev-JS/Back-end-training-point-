import LoginUsusario from "./LoginUsuario";

const Logar = (req,res) =>{
    try{
        const resposta =  LoginUsusario(req.body)
        return res.status(200).json(resposta)
    }catch(err){
        return res.status(400).json(err.message)
    }
}

export default Logar