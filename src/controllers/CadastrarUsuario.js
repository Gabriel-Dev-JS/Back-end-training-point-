import usuarioSchema from "../database/usuarioSchema.js"

//import { UsuarioCadastradoError } from "../errors/UsuarioCadastradoError.js"

const CadastrarUsuario = async (body) => {
    const { nome, email, senha } = body

    const usuario = await usuarioSchema.findAll({where:
        {email}
    })

    if(!usuario) {
        throw new error()
        //throw new UsuarioCadastradoError()
    }

    const cadastro = await usuarioSchema.create({
        nome,
        email,
        senha
    });

    return cadastro
}

export default CadastrarUsuario