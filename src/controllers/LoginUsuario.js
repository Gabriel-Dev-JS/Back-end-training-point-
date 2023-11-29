import usuarioSchema from "../database/usuarioSchema.js"

const LoginUsuario = async (body) => {
    const {email, senha} = body
    
    const usuario = await usuarioSchema.findOne({where:{email:email}});
    
    if(!usuario){
        throw new Error("Email ou Senha Incorreto");
    }
    if(usuario.senha !== senha){
        throw new Error("Email ou Senha Incorreto")
    }
    
    return { id: usuario.idUsuario }
}

export default LoginUsuario