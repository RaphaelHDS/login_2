function logar(){
    var a = document.getElementById("u").value
    var b = document.getElementById("s").value

    if (a == "admin" && b == "123"){
        alert("Login feito com sucesso")
        window.location = "page.html"
    } else {
        document.getElementById("tela_erro").innerHTML = "Erro ao entrar"
    }
}

function somar(){
    var nun1 = document.getElementById("n1").value
    var nun2 = document.getElementById("n2").value
    var soma;

    if (nun1 == "" || nun2 == ""){
        alert("Insira os números!")
    } else if (Number(nun1) > 10 || Number(nun2) > 10){
        document.getElementById("resultado").innerHTML = "Digite valores menores que 10."
    } else {
        soma = "Resultado: " + (Number(nun1) + Number(nun2))
        document.getElementById("resultado").innerHTML = soma
    }
}