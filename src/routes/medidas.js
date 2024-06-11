var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.get("/metricas" ,function (req,res) {
    medidaController.metricas(req,res);
})

router.get("/curtir" , function (req,res) {
    medidaController.curtir(req,res);
})

router.get("/metricaspost" ,function (req,res) {
    medidaController.metricaspost(req,res);
})

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;