/**
 * 
 * busca pelo email, ver se user existe
 * se ele nao existe, lança o erro
 * confere a senha salva com a senha passada na requisicao
 * se nao for, lança o erro
 * 
 */

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
