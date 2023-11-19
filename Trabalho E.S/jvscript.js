function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin"  && senha == "admin123"){
        alert("Sucesso");
        location.href = "home.html"
    
    }else{
        alert("Usuário ou Senha Incorretos!");
    }
}

function mostraOcultarSenha(){
    var senha = document.getElementById('senha');
    if(senha.type == "password"){
        senha.type =  "text"
    }else{
        senha.type = "password";
    }
}