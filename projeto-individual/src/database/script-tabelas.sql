-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE newVision;

USE newVision;
    
CREATE TABLE tbCadastro(
	idCadastro INT PRIMARY KEY AUTO_INCREMENT 
    ,nome VARCHAR(100)
    ,username VARCHAR (20)
    ,cpf VARCHAR(11)
    ,email VARCHAR(256)
    ,telefone CHAR(15)
    ,senha CHAR(8)
    ,foto VARCHAR(800)
);

CREATE TABLE tbPublicacao (
	idPublicacao INT PRIMARY KEY  AUTO_INCREMENT  
    ,titulo VARCHAR(100)
    ,descPublicacao VARCHAR (700)
);

CREATE TABLE tbComentario(
	idComentario INT AUTO_INCREMENT 
    ,comentario VARCHAR(400)
    ,fkPublicacao INT
    ,fkCadastro INT
    ,FOREIGN KEY(fkPublicacao) REFERENCES tbPublicacao(idPublicacao)
    ,FOREIGN KEY(fkCadastro) REFERENCES tbCadastro(idCadastro)
    ,PRIMARY KEY (idComentario,fkPublicacao,fkCadastro)
    );
    

SELECT * FROM tbCadastro;

SELECT * FROM tbPublicacao;


SELECT * FROM tbComentario;

SELECT * FROM tbPublicacao;


-- select para mostrar as postagens no feed inicial do usuario (da ultima publicacao para a primeira)
 SELECT  a.idPublicacao AS idPublicacao, a.titulo, a.descPublicacao FROM tbPublicacao a  ORDER BY idPublicacao DESC ;


-- metricas da dashboard

    -- contar quantidade de posts e usuarios na plataforma:
    SELECT COUNT(idComentario) FROM tbComentario;
    SELECT COUNT(idPublicacao) FROM tbPublicacao;


-- metrica para gerar o percentual de usuarios ativos com base se o usuario tem ou não comentario:

    -- Contar o total de usuários cadastrados
    SELECT COUNT(*) AS TotalUsuarios FROM tbCadastro;

-- Contar o número de usuários que possuem comentários
    SELECT COUNT(DISTINCT fkCadastro) AS UsuariosAtivos FROM tbComentario;

-- Calcular o percentual de usuários ativos
  SELECT 
    ROUND(
        (SELECT COUNT(DISTINCT fkCadastro) FROM tbComentario) / 
        (SELECT COUNT(*) FROM tbCadastro) * 100,
        2
    ) AS PercentualUsuariosAtivos;



-- montar o ranking de acordo com a qtd de comentarios que cada usuario tem
    SELECT tbCadastro.username AS Nomeusuario, tbCadastro.foto AS Imagem, COUNT(tbComentario.idComentario) AS NumeroDeComentarios
	FROM tbComentario JOIN tbCadastro ON tbComentario.fkCadastro = tbCadastro.idCadastro
	GROUP BY tbCadastro.username, tbCadastro.foto
	ORDER BY NumeroDeComentarios DESC LIMIT 3;

-- mostrar os dados no grafico

SELECT DATE(dataH) AS Dia, COUNT(*) AS QuantidadeUsuarios FROM tbCadastro
	WHERE dataH >= CURDATE() - INTERVAL 7 DAY
		GROUP BY DATE(dataH) ORDER BY DATE(dataH);






