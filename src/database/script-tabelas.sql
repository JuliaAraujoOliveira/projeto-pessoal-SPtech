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
    ,email VARCHAR(256)
    ,telefone CHAR(15)
    ,senha CHAR(8)
    ,foto VARCHAR(800)
    ,bio VARCHAR(100)
);

CREATE TABLE tbPublicacao (
	idPublicacao INT PRIMARY KEY  AUTO_INCREMENT  
    ,titulo VARCHAR(40)
    ,descPublicacao VARCHAR (300)
    ,imagem VARCHAR(800)
);

CREATE TABLE tbComentario (
	idComentario INT 
    ,descComentario VARCHAR(100)
    ,dtComentario DATE
    ,fkPublicacao INT
    ,fkCadastro INT
    ,FOREIGN KEY(fkPublicacao) REFERENCES tbPublicacao(idPublicacao)
    ,FOREIGN KEY(fkCadastro) REFERENCES tbCadastro(idCadastro)
    ,PRIMARY KEY (idComentario,fkPublicacao,fkCadastro)
)