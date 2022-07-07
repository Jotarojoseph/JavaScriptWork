
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



























