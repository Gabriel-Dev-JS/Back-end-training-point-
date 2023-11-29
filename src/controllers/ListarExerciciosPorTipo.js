import usuarioSchema from "../database/usuarioSchema.js"
import exercicioSchema from "../database/exercicioSchema.js"

export const ListarExerciciosPorTipo = async(params)=>{
    const usuario = await usuarioSchema.findByPk(params.idUsuario);
    
    if(!usuario) {
        throw new Error(`Usuário "${params.idUsuario}" não existe.`);
    }

    const tipo = params.tipo.toUpperCase();

    if(tipo !== "SUPERIORES" && tipo !== "INFERIORES") {
        throw new Error("Tipo inválido");
    }

    const exercicios = await exercicioSchema.findAll({
        where: {
            usuarioIdUsuario: params.idUsuario,
            tipo: tipo
        }
    })

    return exercicios
}