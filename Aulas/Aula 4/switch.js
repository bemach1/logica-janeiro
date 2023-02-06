const prompt = require("prompt-sync")()

console.log("Seja bem vindo ao sistema")
console.log("Digite 'C' para Cadastrar")
console.log("Digite 'B' para Buscar")
console.log("Digite 'D' para Deleter")

let opcao = prompt()

switch(opcao){
    case 'C':
        console.log("Você apertou a letra C")

        break
    case 'B':
        console.log("Você apertou a letra B")

        break
    case 'D':
        console.log("Você apertou a letra D")

        break
    default:
        console.log("Você escolheu uma opção invalida")

        break
}

