import express from "express"
import usuarioRouter from './routes/UsuarioRoutes.js'
import sessaoRouter from './routes/SessaoRoutes.js'

const app = express()

app.use(express.json())

app.use('/sessoes', sessaoRouter)
app.use('/usuarios', usuarioRouter)


export default app