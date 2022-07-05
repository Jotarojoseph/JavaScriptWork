
//while = enquanto 
/*
var x = 0;

while(x < 10){
    document.write("<br> O Valor do x é: " + x);

    // Aumentando o valor de X
    x++;
}
 */

//For = Para 

/*
for(a = 0; a <= 10; a++){
    document.write("<br> Valor de a é: " + a);

}
*/


var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();
    
    peso = document.getElementById("peso").value;
    altura =document.getElementById("altura").value;

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Muito abaixo do peso'

    }
    else if(imc > 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Abaixo do peso'
  
    }

    else if(imc >= 18.5 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Peso Ideal'
  
    }
    else if(imc > 25 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Acima do peso'
  
    }
    else if(imc >= 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Obesidade'
  
    }

    document.getElementById("peso").value='';
    document.getElementById("altura").value='';
    

}

