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
function metricasporcentagem() {
    var instrucaoSql = `
        SELECT 
            ROUND((COUNT(DISTINCT tbComentario.fkCadastro) / COUNT(tbCadastro.idCadastro)) * 100, 2) AS PercentualUsuariosAtivos
        FROM 
            tbCadastro
        LEFT JOIN 
            tbComentario ON tbCadastro.idCadastro = tbComentario.fkCadastro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    metricasusuario,
    metricaspost,
    metricasporcentagem
}
