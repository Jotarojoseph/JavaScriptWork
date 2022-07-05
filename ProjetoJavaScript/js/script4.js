

function seuNome(event){

    var resultado = document.getElementById('resultado');
    var nome = document.getElementById('nome');
   if(nome){
    resultado.innerHTML = 'Seu nome é ' + nome;
   }
    else if(nome = null){
        resultado.innerHTML = 'Digite seu nome'; 
    }
}