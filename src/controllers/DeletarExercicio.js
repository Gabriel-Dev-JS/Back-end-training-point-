import exercicioSchema from "../database/exercicioSchema.js";

export const DeletarExercicio = async(params)=>{
    const idUsuario = params.idUsuario;
    const idExercicio = params.idExercicio;
    
    await exercicioSchema.destroy({
        where: {
            idExercicio: idExercicio,
            usuarioIdUsuario: idUsuario
        }
    })
}