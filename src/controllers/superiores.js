import exercicioSchema from "../database/exercicioSchema.js"


const Superiores = async (body)=>{
    const {exercicio,repeticao,serie,} = body
    await exercicioSchema.create({
        exercicio,
        serie,
        repeticao
    })

}

export default Superiores