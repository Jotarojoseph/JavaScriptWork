 let num = [1,2,3,4,5,6,7]

// for (let pos=0; pos<num.length; pos++ ){
//     console.log('a posição ' + pos + ' tem o valor ' + num[pos])
// }

for(let pos in num){
    console.log('A posição de cada vetor é ' + num[pos])
}