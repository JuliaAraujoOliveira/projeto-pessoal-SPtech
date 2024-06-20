var database = require("../database/config");



// quantidade de usuarios cadastrados

function metricasusuario() {

    var instrucaoSql = 'SELECT COUNT(idCadastro) as qtd FROM tbCadastro;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

// quantidade de posts 

function metricaspost() {

    var instrucaoSql = 'SELECT COUNT(idPublicacao) as qtdpost FROM tbPublicacao;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


// cadastro curtida 
function metricascomentario(idUsuario, publicacao) {
    var instrucaoSql = `INSERT INTO (curtida,dtCurtida,fkPublicacao,fkCadastro) FROM tbCurtida VALUES (1,now(),${publicacao},${idUsuario}) ;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    metricasusuario,
    metricaspost,
    metricascomentario
}
