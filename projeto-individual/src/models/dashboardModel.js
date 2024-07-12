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
    ROUND(
        (SELECT COUNT(DISTINCT fkCadastro) FROM tbComentario) / 
        (SELECT COUNT(*) FROM tbCadastro) * 100,
        2
    ) AS PercentualUsuariosAtivos;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function rankingusuarios(){
    var instrucaoSql = `SELECT usuario.username AS Nomeusuario, usuario.foto AS Imagem, COUNT(comentario.idComentario) AS NumeroDeComentarios
	FROM tbComentario as comentario JOIN tbCadastro as usuario ON comentario.fkCadastro = usuario.idCadastro
		GROUP BY usuario.username, usuario.foto
			ORDER BY NumeroDeComentarios DESC LIMIT 3;`

            console.log("Executando a instrução SQL: \n" +instrucaoSql);
            return database.executar(instrucaoSql);
}



function obtergrafico(){
    var instrucaoSql = `SELECT DATE(dataH) AS Dia, COUNT(*) AS QuantidadeUsuarios FROM tbCadastro
	                        WHERE dataH >= CURDATE() - INTERVAL 7 DAY
		                    GROUP BY DATE(dataH) ORDER BY DATE(dataH);`
    console.log("Executando a instrucao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    metricasusuario,
    metricaspost,
    metricasporcentagem,
    rankingusuarios,
    obtergrafico
}
