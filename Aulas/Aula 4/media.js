const prompt = require("prompt-sync")()

// let texto = "Wesdras gosta de estudar programaçao";

// console.log(texto.length)
// console.log(texto.split(" ").length)

let quantidadeNumeros = Number(prompt("Entre com a quantidade de números: "))
let numeros = []

for(let posicao=0; posicao < quantidadeNumeros; posicao++){
    let numero = Number(prompt(`Entre com o número da posicao ${posicao}: `))

    numeros[posicao] = numero
}

let soma = 0

for(let posicao in numeros){
    soma += numeros[posicao]
}

const media = soma / numeros.length

console.log(`A media dos ${numeros.length} é ${media} `)