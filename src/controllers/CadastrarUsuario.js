import usuarioSchema from "../database/usuarioSchema.js"

const CadastrarUsuario = async (body) => {
    const { nome, email, senha } = body
    
    const usuario = await usuarioSchema.findOne({where:
        {email}
    })
    
    if(!usuario) {
        await usuarioSchema.create({
            nome:nome,
            email:email,
            senha:senha
        });
    } else {
        throw new Error(`Usuário "${email}" já existe.`)
    }

    return 
}

export default CadastrarUsuario