const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router")

const app = express()


//Configuração do BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Configuração de Rotas
app.use(router)

//Ligando o Servidor
const port = 3031
app.listen(port, console.log("localhost:" + port))