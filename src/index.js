const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const handlebars = require("express-handlebars")
const lowdb = require("./database/server");
const path = require("path");

const app = express()

//Configuração do BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Deixando Público a pasta public
app.use(express.static(path.join(__dirname, "public")))

//Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))

// Configuração de Rotas
app.use(router)

//Ligando o Servidor
const port = 3031
app.listen(port, console.log("localhost:" + port))