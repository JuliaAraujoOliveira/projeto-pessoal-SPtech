var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.get("/metricasusuario" ,function (req,res) {
    dashboardController.metricasusuario(req,res);
})

router.get("/mporcentagemusuario", function (req, res) {
    dashboardController.metricasporcentagem(req, res);
})

router.get("/metricaspost" ,function (req,res) {
    dashboardController.metricaspost(req,res);
})


router.get("/Ranking", function (req,res) {
    dashboardController.rankingusuarios(req,res)
})


router.get("/obtergrafico", function (req,res){
    dashboardController.obterdados(req,res)
})

module.exports = router;