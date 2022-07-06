
function carregar() {

       var msg = window.document.getElementById('msg');
       var img = window.document.getElementById('imagem');
       var data = new Date();
       var hora =  data.getHours();
       msg.innerHTML = 'Agora são ' + hora + ' horas';


       if(hora >= 0 && hora < 12) {
              // bom dia
       img.src = '../img/pexels-pixabay-462030.jpg';
       }     
       else if(hora >= 12 && hora >= 18) {
              // boa tarde
       img.src ='../img/pexels-live-on-shot-11142516.jpg';
       }      
       
       else{
               // boa noite
       img.src ='../img/pexels-anderson-martins-2386144.jpg';
       
}
}





























// var agora = new Date()
// var diaSem = agora.getDay()

// console.log(diaSem) 

// switch(diaSem){

    
//     case 0:
//         console.log('Domingo')
//     break

//     case 1:
//         console.log('Segunda')
//     break
    
//     case 2:
//         console.log('Terça')
//     break
    
//     case 3:
//         console.log('Quarta')
//     break
    
//     case 4:
//         console.log('Quinta')
//     break
    
//     case 5:
//         console.log('Sexta')
//     break
    
//     case 6:
//         console.log('Sabado')
//     break
    
// }





















// var agora = new Date()
// var hora = agora.getHours()

// if(hora < 12) {

//     console.log('Bom dia')
    
// }
// else if(hora < 18){
//     console.log('Boa tarde')
        
// }

// else  if (hora > 5 ){
//     console.log('Boa noite ou Boa Madrugada')
// }
    


 // function calcular(){
        //     var txlv = document.getElementById('txlevel')
        //     var res = document.getElementById('res')
        //     var vel = Number(txlv.value)
            
        //     res.innerHTML = "<p> Sua velocidade atual é " + vel + "km/h</p>"
        //     if(vel > 60) {
        //         res.innerHTML = "<p> Ultrapassou o limite " + vel + "km/h</p>"
        //     }
        //     else{
        //         res.innerHTML = "<p> Dirija com cuidado " + vel + "km/h</p>"
        //     }
        // }
