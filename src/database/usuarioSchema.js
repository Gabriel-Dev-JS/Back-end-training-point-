import Sequelize from 'sequelize'

import sequelize from './sequelize.js' 

/*(async () => {
    console.log("CRIANDO")
    await sequelize.sync();
})();*/

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
})



/*, {
    indexes: [{
        unique: true,
        fields: ["email"]
    }]
})*/

//sequelize.sync();



export default usuarioSchema;