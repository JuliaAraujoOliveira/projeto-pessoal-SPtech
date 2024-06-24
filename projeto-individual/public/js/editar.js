function listarInfosDeUm() {
    console.log("Criar função de trazer informações de post escolhido");
}



// edição de publicações 
function editar() {
    fetch(`/publicacoes/editar/${sessionStorage.getItem("ID_POSTAGEM_EDITANDO")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descricao: textarea_descricao.value
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Post atualizado com sucesso pelo usuario de email:!");
            window.location = "../dashboard/publicar.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}