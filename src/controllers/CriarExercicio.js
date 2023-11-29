import exercicioSchema from "../database/exercicioSchema.js"
import usuarioSchema from "../database/usuarioSchema.js"

const CriarExercicio = async (body)=>{
    const {exercicio,repeticao,serie,idUsuario,tipo} = body

    const usuario = await usuarioSchema.findByPk(idUsuario);
    
    if(!usuario) {
        throw new Error(`Usuário "${idUsuario}" não existe.`)
    }

    await exercicioSchema.create({
        exercicio,
        serie,
        repeticao,
        usuarioIdUsuario: idUsuario,
        tipo: tipo.toUpperCase()
    })
}

export default CriarExercicio