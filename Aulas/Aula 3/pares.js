const prompt_sync = require('prompt-sync')
const prompt = prompt_sync()


let resultadoDivisao = 0

while(resultadoDivisao == 0){
    let numero = prompt("Entre com um numero: ")
    numero = Number.parseInt(numero)
    
    resultadoDivisao = numero % 2
    
    if(resultadoDivisao == 0){
        console.log("Isso é numero par")
    }else{
        console.log("É um numero impar")
    }
}
