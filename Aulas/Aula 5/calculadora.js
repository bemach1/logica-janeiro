const prompt = require("prompt-sync")()

function somar(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

function subtrair(numero1, numero2){
    let resultado = numero1 - numero2
    return resultado
}

function calcula(numero1, numero2, simbolo){
    console.log(`O calculo será ${numero1} ${simbolo} ${numero2}`)
    switch(simbolo){
        case "+":
            return numero1 + numero2
        case "-":
            return numero1 - numero2
        case "*":
            return numero1 * numero2    
        }

    console.log("SIMBOLO NAO ENCONTRADO")
}

let primeiroNumero = Number(prompt("Entre com o primeiro numero: "))
let segundoNumero = Number(prompt("Entre com o segundo numero: "))
let simbolo = prompt("Entre com o simbolo")

let resultado = 0

resultado = calcula(primeiroNumero,segundoNumero, simbolo)

console.log(resultado)