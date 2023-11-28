import usuarioSchema from "../database/usuarioSchema.js"

const CadastrarUsuario = async (body) => {
    const { nome, email, senha } = body
    const usuario = await usuarioSchema.findAll({where:
        {email}
    })
    if(usuario == false) {
        await usuarioSchema.create({
            nome:nome,
            email:email,
            senha:senha
        });
    }else{
        throw new Error()
    }

    return 
}

export default CadastrarUsuario