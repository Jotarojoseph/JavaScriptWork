var valorx;
var valory;
var soma;
var sub;
var div;
var mult;

function somar(event){

  event.preventDefault();
  valorx = document.getElementById('valorx').value;
  valory = document.getElementById('valory').value;
  
  

  soma = document.getElementById('soma');
  soma = parseFloat(valorx) + parseFloat(valory);

  if(soma){
    
    resultado = document.getElementById('resultado');
    resultado.innerHTML =  ' x + y = ' + valorx + ' + ' + valory+ ' = '+ soma ;
}

  else if (soma >= 0){
    resultado = document.getElementById('resultado');
    resultado.innerHTML =  ' x + y = ' + valorx + ' + ' + valory+ ' = '+ soma ;
  }
}

function subtrair(event){

  event.preventDefault();
  valorx = document.getElementById('valorx').value;
  valory = document.getElementById('valory').value;
  sub = document.getElementById('sub');

  sub = parseFloat(valorx) - parseFloat(valory);

  if(sub){
    
    resultado = document.getElementById('resultado');
    resultado.innerHTML =  ' x - y = ' + valorx + ' - ' + valory+ ' = ' + sub;
}

  else if(sub >= 0){
    resultado = document.getElementById('resultado');
    resultado.innerHTML =  ' x - y = ' + valorx + ' - ' + valory+ ' = ' + sub;

  }

}

function dividir(event){

  event.preventDefault();
  valorx = document.getElementById('valorx').value;
  valory = document.getElementById('valory').value;
  div = document.getElementById('div');

  div = parseFloat(valorx) / parseFloat(valory);

  if(div){
    
    resultado = document.getElementById('resultado');
    resultado.innerHTML =  ' x / y = ' + valorx + ' / ' + valory+ ' = ' + div;
}


}

function multiplicar(event){

  event.preventDefault();
  valorx = document.getElementById('valorx').value;
  valory = document.getElementById('valory').value;
  mult = document.getElementById('mult');

  mult = parseFloat(valorx) * parseFloat(valory);

  if(mult){
    
    resultado = document.getElementById('resultado');
    resultado.innerHTML =  ' x * y = ' + valorx + ' * ' + valory+ ' = ' + mult;
}

}