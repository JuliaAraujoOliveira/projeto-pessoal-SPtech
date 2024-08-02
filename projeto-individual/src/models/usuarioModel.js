var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucaoSql = `
        SELECT idCadastro, nome, email FROM tbCadastro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(usuario) {
    var instrucaoSql = `
        INSERT INTO tbCadastro (nome, username, email, telefone, senha, foto, dataH) 
        VALUES ('${usuario.nome}', '${usuario.username}', '${usuario.email}', '${usuario.telefone}', '${usuario.senha}', '${usuario.foto}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function configurar(idUsuario) {
    var instrucaoSql = `
        SELECT idCadastro, nome, username, email, telefone, senha 
        FROM tbCadastro 
        WHERE idCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function imagem(idUsuario) {
    var instrucaoSql = `
        SELECT idCadastro, foto 
        FROM tbCadastro 
        WHERE idCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

var database = require("../database/config");

function atualizar(idUsuario, dados) {
    var instrucaoSql = `
        UPDATE tbCadastro 
        SET nome = '${dados.nome}', 
            username = '${dados.username}', 
            email = '${dados.email}', 
            telefone = '${dados.telefone}', 
            senha = '${dados.senha}'
        WHERE idCadastro = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    // Executar a instrução SQL de atualização
    return database.executar(instrucaoSql).then(() => {
        // Após a atualização, buscar os dados atualizados
        var selectSql = `
            SELECT idCadastro, nome, username, email, telefone, senha 
            FROM tbCadastro 
            WHERE idCadastro = ${idUsuario};
        `;
        console.log("Executando a instrução SQL: \n" + selectSql);
        return database.executar(selectSql);
    });
}

module.exports = {
    autenticar,
    cadastrar,
    configurar,
    imagem,
    atualizar
};
