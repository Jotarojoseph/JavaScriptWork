

let listElement = document.querySelector('#app ul');
let inputElemnt = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function showTarefas(){
    listElement.innerHTML = '';

    tarefas.map((todo)=>{
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);

        let linkElement= document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText); 

        let position = tarefas.indexOf(todo);

        linkElement.setAttribute('onclick',`excluirTarefa(${position})`);
        
        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })


}


function adicionarTarefas(){
    if(inputElemnt.value === ''){
        alert('Digite alguma tarefa');
        return false;
    }
    else{
       let novaTarefa = inputElemnt.value;

       tarefas.push(novaTarefa);
       inputElemnt.value = '';
    
       showTarefas();


    }
}

buttonElement.onclick = adicionarTarefas;

function excluirTarefa(position){
    tarefas.splice(position, 1);
    showTarefas();
}