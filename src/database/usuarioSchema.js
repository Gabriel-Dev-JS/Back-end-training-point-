import Sequelize from 'sequelize'

import sequelize from './sequelize.js' 

const usuarioSchema = sequelize.define('usuario',{
    idUsuario:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,

    },
    senha:{
        type: Sequelize.STRING,
        allowNull:false
    }
}, {
    indexes: [{
        unique: true,
        fields: ["email"]
    }]
})



export default usuarioSchema;