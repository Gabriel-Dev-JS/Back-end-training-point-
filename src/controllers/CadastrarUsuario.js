import usuarioSchema from "../database/usuarioSchema.js"


const CadastrarUsuario = async (body) => {
    const { nome, email, senha } = body

    const usuario = await usuarioSchema.findAll({where:
        {email}
    })

    if(!usuario) {
        throw new error()
    }

    const cadastro = await usuarioSchema.create({
        nome,
        email,
        senha
    });

    return cadastro
}

export default CadastrarUsuario