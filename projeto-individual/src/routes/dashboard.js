var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.get("/metricasusuario" ,function (req,res) {
    dashboardController.metricasusuario(req,res);
})

router.get("/metricacomentario" , function (req,res) {
    dashboardController.metricascomentario(req,res);
})

router.get("/metricaspost" ,function (req,res) {
    dashboardController.metricaspost(req,res);
})


module.exports = router;