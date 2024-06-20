// contagem de usuarios cadastrados
function metricas() {
    fetch("../dashboard/metricasusuario", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((registrados) => {
            qtdcadastro.innerHTML = registrados[0].qtd;
        });
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}


//contagem comentarios
function metricascomentarios() {
    fetch("../dashboard/metricascomentario", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((registrados) => {
            qtdcomentario.innerHTML = registrados[0].qtdcomentario;
        });
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}




// contagem de posts
function metricaspost() {
    fetch("../dashboard/metricaspost", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((registrados) => {
            qtdpost.innerHTML = registrados[0].qtdpost;
        });
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

