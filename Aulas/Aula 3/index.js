const prompt_sync = require('prompt-sync')
const prompt = prompt_sync()

// let nome = prompt("Entre com seu nome: ")

// if(nome == 'wesdras'){
//     console.log(`O nome digitado é do Wesdras`)
// }

let primeiroNumero = prompt("Entre com o primeiro número: ")
primeiroNumero = Number.parseFloat(primeiroNumero)
let segundoNumero = prompt("Entre com o segundo número: ")
segundoNumero = Number.parseFloat(segundoNumero)

let operador = prompt("Entre com o operador desejado: ")

if(operador == "+"){
    console.log("A soma dos numeros será: ", primeiroNumero + segundoNumero)
}
else if(operador == "-"){
    console.log("A subtração dos numeros será: ", primeiroNumero - segundoNumero)
}else if(operador == "*"){
    console.log("A multiplicação dos numeros será: ", primeiroNumero * segundoNumero)
}else if(operador == "/"){
    console.log("A divisão dos numeros será: ", primeiroNumero / segundoNumero)
}else{
    console.log("Operador inválido")
}


