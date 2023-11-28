import Express from 'express'
import cors from 'cors'
import sequelize from './database/sequelize.js'
import routes from './Routes.js'

const port = 3300

const app = Express()   

app.use(cors({
    origin: "*",
}))
app.use(Express.json())
app.use(routes)

sequelize.sync(console.log("conectado"))


app.listen(port,console.log(`servidor rodando: http://localhost:${port}/`))