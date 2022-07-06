
var area = document.getElementById('area')

function entrar() {
    var nome = prompt("Digite seu nome");

    if(nome == '' || nome == null){
        alert("Algo deu errado")
        area.innerHTML = "Clque no botao para acessar..."
        
}
    else
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);

}


function sair(){
    alert("Até mais");
    area.innerHTML = "Você saiu"
}




function mediaAluno(nota1,nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aprovado " + media)
    }
    else if (media < 7) {
        console.log("reprovado " + media)
    }
}

function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}