function login() {
    var emailNomeVar = email_input.value.trim()
    var senhaVar = senha_input.value.trim()

    // validação para campos em branco no login

    if (emailNomeVar == "" || senhaVar == "") {
        alert("Preencha todos os campos para realizar o login")
        return false
    }

    // validação para o administrador entrar  uma pagina diferente do usuario normal, usando o  mesmo formulario de login

    if (emailNomeVar == "ADM" && senhaVar == "123") {
        alert("Login realizado com sucesso!")

        sessionStorage.NOME_USUARIO = "adm@gmail.com";


        // entrar na tela da dashboard onde so o adm pode entrar
        setTimeout(function () {
            window.location = "dashboard/index.html";
        }, 1000);

        return;
    }

    fetch("usuario/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailNomeVar,
            senhaServer: senhaVar

        })
    }).then(function (resposta) {

        // validação para usuario entrar na página inicial e poder comentar/ curtir

        if (resposta.ok) {
            resposta.json().then(json => {
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id
 
                alert("Login realizado com sucesso!")
                setTimeout(function () {
                    window.location = "newvision/index.html";
                }, 1000);
            });

        } else { // caso haja algum erro de campos incorretos 
            alert("Email de usuário ou senha incorretos!")
            console.log("Houve um erro ao tentar realizar o login!");
            
            console.log(emailServer)

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
