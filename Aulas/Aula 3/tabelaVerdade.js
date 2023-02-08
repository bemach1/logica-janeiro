const prompt_sync = require('prompt-sync')
const prompt = prompt_sync()

//AND, OR e NOT
//Joao, Mario ou Alfredo

/**
 * OR = ||
 * AND = &&
 * NOT = !
 */

let nome = prompt('Entre com seu nome: ')
let idade = prompt('Entre com sua idade: ')

let nomeValido = false
let idadeValida = false

if(nome == "Joao" || nome == "Maria" || nome == "Alfredo"){
    nomeValido = true
}

if(idade >= 0){
    idadeValida = true
}

if(nomeValido == true && idadeValida == true){
    if(idade < 12){
        console.log("É uma criança")
    }else if(idade < 18 ){
        console.log("É um adolescente")
    }else{
        console.log("É um adulto")
    }
}else{
    if(nomeValido && !idadeValida ){
        console.log("O Nome é valido, porem a idade não")
    }else if(!nomeValido && idadeValida ){
        console.log("A idade é valido, porem o nome não")
    }
    else{
        console.log("O Nome e idade são invalidos")
    }
}


