var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
var usuarioController = require("../controllers/usuarioController");

// Rota para cadastrar um novo usuário
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

// Rota para autenticar um usuário
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// // Rota para buscar um usuário pelo ID
// router.get('/:id', upload.single('foto'), (req, res) => {
//     usuarioController.buscarUsuarioPeloId(req, res);
// });

// Rota para renderizar a página inicial
router.get("", (req, res) => {
    res.render("index");
});

// Rota para cadastrar um usuário
router.post('/cadastro', upload.single('foto'), (req, res) => {
    usuarioController.salvar(req, res);
});

module.exports = router;
