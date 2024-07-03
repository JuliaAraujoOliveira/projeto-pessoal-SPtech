var express = require("express");
var router = express.Router();

var publicacoesController = require("../controllers/publicacoesController");

router.get("/listar", function (req, res) {
    publicacoesController.listar(req, res);
});



router.get("/listar/:idUsuario", function (req, res) {
    publicacoesController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    publicacoesController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    publicacoesController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    publicacoesController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    publicacoesController.deletar(req, res);
});

router.post("/comentario/:idPublicacao", function (req, res) {
    publicacoesController.comentarios(req, res);
});

module.exports = router;