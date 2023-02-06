const prompt = require("prompt-sync")()

const array = [1,2,3,4]

const matriz = [
                    [1,2,3,4,5,6,9,5],
                    [5,3,7,8],
                    [21,9,54,8]
                ]

console.table(matriz)

console.log(matriz.length)
console.log(matriz[0].length)

const numero = Number(prompt("Entre com o numero a ser buscado: "))
let contador = 0

for(let linha in matriz){
    for(let coluna in matriz[linha]){
        console.log(`Passando pela linha ${linha} e coluna ${coluna}`)
        if(matriz[linha][coluna] == numero){
            contador++
        }
    }
}

console.log(`A quantidade de números encontrados foi ${contador}`)