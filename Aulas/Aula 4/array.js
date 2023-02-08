const prompt = require("prompt-sync")()
let numeros = [1,5,15,20]

// console.log(numeros[3])

// for(let index = 3; index >= 0; index--){
//     console.log(numeros[index])
// }

let pessoas = []

for(let posicao = 0; posicao <= 5; posicao++){
    let pessoa = prompt("Digite um nome: ")
    
    pessoas[posicao] = pessoa  
}

console.table(pessoas)
