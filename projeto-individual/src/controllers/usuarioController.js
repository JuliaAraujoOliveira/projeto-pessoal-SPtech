var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idCadastro,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        senha: resultadoAutenticar[0].senhaServer,
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    console.log(req.body);
    console.log(req.file);

    const foto = req.file.filename;
    const { nome, username, email, telefone, senha } = req.body;
    const usuario = { nome, username, email, telefone, senha, foto };

    if (!foto || !nome || !username || !email || !telefone || !senha) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        usuarioModel.cadastrar(usuario)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function configurar(req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioModel.configurar(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.error("Houve um erro ao selecionar os dados do usuário:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}

function imagem(req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioModel.imagem(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.error("Houve um erro ao selecionar a imagem do usuário:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}

function atualizar(req, res) {
    var idUsuario = req.params.idUsuario;
    var dados = req.body;

    console.log(`Recebendo solicitação para atualizar usuário com ID ${idUsuario}`);
    console.log(`Dados recebidos para atualização:`, dados);

    usuarioModel.atualizar(idUsuario, dados)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.json({
                    mensagem: "Dados atualizados com sucesso!",
                    usuario: resultado[0]  // Retornar apenas os dados atualizados
                });
            } else {
                res.status(404).json({ mensagem: "Usuário não encontrado." });
            }
        }).catch(function (erro) {
            console.error("Houve um erro ao atualizar os dados do usuário", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}


module.exports = {
    autenticar,
    cadastrar,
    configurar,
    imagem,
    atualizar
};
