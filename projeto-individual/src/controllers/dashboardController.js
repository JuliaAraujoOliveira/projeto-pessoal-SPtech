var dashboardModel = require("../models/dashboardModel");

function metricasusuario(req,res) {

    console.log(`Usuarios`);

    dashboardModel.metricasusuario().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    
}


function metricaspost(req,res) {

    console.log(`Usuarios`);

    dashboardModel.metricaspost().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    
}


function metricascomentario(req,res) {

    console.log(`Usuarios`);

    var idusuario = req.params.idUsuario;
    var publicacao = req.params.publicacao;
    console.log(req.params)

    dashboardModel.metricascomentario(idusuario,publicacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    
}


module.exports = {
    metricasusuario,
    metricaspost,
    metricascomentario

}