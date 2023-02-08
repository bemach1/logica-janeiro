const prompt_sync = require('prompt-sync')
const prompt = prompt_sync()

let numeroBase = Number(prompt("Entre com um numero"))

let contador

for(contador = 12; contador <=20; contador++){
    console.log(contador)
    console.log(` ${contador} * ${numeroBase} = ${contador * numeroBase}`)

    if(contador == 15){
        return
    }
}



