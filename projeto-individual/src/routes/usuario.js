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

router.get('/configuracoes/:idUsuario', function (req, res) {
    usuarioController.configurar(req, res);
});

router.get('/imagem/:idUsuario', function (req, res) {
    usuarioController.imagem(req,res);
})

// Rota para renderizar a página inicial
router.get("", (req, res) => {
    res.render("index");
});

router.put('/atualizar/:idUsuario', function(req, res) {
    usuarioController.atualizar(req, res);
});


module.exports = router;
