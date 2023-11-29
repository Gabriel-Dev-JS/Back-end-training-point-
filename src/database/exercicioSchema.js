import Sequelize from 'sequelize'

import sequelize from './sequelize.js' 
import usuarioSchema from './usuarioSchema.js'

const exercicioSchema = sequelize.define('exercicio',{  
    idExercicio:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    exercicio:{
        type: Sequelize.STRING,
        allowNull:false
    },
    serie:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    repeticao:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

usuarioSchema.hasMany(exercicioSchema)

exercicioSchema.belongsTo(usuarioSchema)



export default exercicioSchema

/*usuarioSchema.hasMany(exercicioSchema,{
    constraint: true,
    foreignKey: 'id'
})

exercicioSchema.belongsTo(usuarioSchema)

(async () => {
    console.log("CRIANDO")
    await sequelize.sync({ force: true });
})();*/
