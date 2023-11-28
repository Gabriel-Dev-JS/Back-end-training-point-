import Sequelize from "sequelize";

const sequelize = new Sequelize('treinos', 'root', 'root',{
    dialect:'mysql',
    host:'localhost',
    port:3306
})

export default sequelize;