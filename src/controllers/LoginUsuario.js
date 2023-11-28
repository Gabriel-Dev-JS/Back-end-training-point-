import usuarioSchema from "../database/usuarioSchema.js"

const LoginUsuario = async (body) => {
    const {email, senha} = body
    const usuario = await usuarioSchema.findAll({where:
        {email}
    })
    const senhaUsuario = await usuarioSchema.findAll({where:
        {senha}
    })
    if(!usuario || !senhaUsuario){
       throw new error (error)
    }
    return
}

export default LoginUsuario