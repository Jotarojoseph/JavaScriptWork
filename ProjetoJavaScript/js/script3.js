function pedir(){
    var valor = prompt("Diite um valor de 1 a 4");

    switch(Number(valor)){

        case 1:
            alert("Suco");
            break;
        case 2:  
            alert("Cafe");
            break;
        case 3:
            alert("Coca");
            break;
        case 4:
            alert("Agua");
            break;
        default:
            alert("Escolha uma opção");
            break;
    }

                 
}