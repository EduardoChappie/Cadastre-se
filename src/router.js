const express = require("express");
const router = express.Router()

// Rota principal
router.get("/", (req, res) => {
	res.send("everything is ok");
})

module.exports = router