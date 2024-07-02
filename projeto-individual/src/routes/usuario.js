var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
var usuarioController = require("../controllers/usuarioController");


// Rota para autenticar um usuário
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.post('/cadastrar', upload.single('foto'), (req, res) => {
    usuarioController.cadastrar(req, res);
});
router.get('configuracoes', function (req,res){
    usuarioController.configurar(req,res)
})

// Rota para renderizar a página inicial
router.get("", (req, res) => {
    res.render("index");
});


module.exports = router;
