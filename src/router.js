const express = require("express");
const router = express.Router()

// Rota principal
router.get("/", (req, res) => {
	res.send("everything is ok");
})


router.get("/registrar-se", (req, res) => {
	res.send("registrando");
})

module.exports = router