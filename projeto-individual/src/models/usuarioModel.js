var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idCadastro ,nome, email FROM tbCadastro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(usuario) {


    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tbCadastro (nome, username, email, telefone, senha, foto) VALUES ('${usuario.nome}','${usuario.username}', '${usuario.email}','${usuario.telefone}', '${usuario.senha}','${usuario.foto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function configurar(idUsuario) {
    var instrucaoSql = `SELECT (nome, username, email, telefone senha ) FROM tbCadastro WHERE idCadastro = ${idUsuario}`
}


module.exports = {
    autenticar,
    cadastrar
};