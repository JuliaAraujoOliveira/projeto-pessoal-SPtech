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


function metricasporcentagem(req, res) {
    console.log(`Calculando percentual de usuários ativos`);

    dashboardModel.metricasporcentagem().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as métricas de percentual de usuários ativos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


 function rankingusuarios(req,res){
    console.log(`Ranking dos 3 usuarios com mais comentarios na plataforma`)
    dashboardModel.rankingusuarios().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado Encontrado!");
        }
        }).catch(function(erro){
            console.log(erro);
            console.log("Houve um erro ao buscar os dados do ranking", erro.sqlMenssage);
            res.status(500).json(erro.sqlMessage);
        })

}


module.exports = {
    metricasusuario,
    metricaspost,
    metricasporcentagem,
    rankingusuarios

}