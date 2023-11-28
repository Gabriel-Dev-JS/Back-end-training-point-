import usuarioSchema from "../database/usuarioSchema.js"

const LoginUsuario = async (body) => {
    const {email, senha} = body
    
    const usuario = await usuarioSchema.findOne({where:{email:email}})
    const senhaUsuario = await usuarioSchema.findOne({where:{senha:senha}})
    
    if(!usuario){
        throw new Error("Email ou Senha Incorreto")
    }
    if(!senhaUsuario){
        throw new Error("Email ou Senha Incorreto")
    }
    
    return 
    
}

export default LoginUsuario