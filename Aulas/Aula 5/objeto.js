let lista = ["Wesdras", "Joao"]
let matriz = [
                [1, "Wesdras", 34]
                [2, "Joao", 10]
            ]

let pessoas = []

pessoas.push({ nome: "Wesdras", idade: 34 })
pessoas.push({ nome: "Joao", idade: 10 })

// for(let index = 0; index < pessoas.length; index++){
//     if(pessoas[index].nome == "Joao"){
//         console.log("A idade do joao é")
//         console.log(pessoas[index].idade)
//     }
// }

function buscarPessoa(pessoa){
    if(pessoa.nome == "Joaoo"){
        return true
    }else{
        return false
    }
}

pessoas[0].sobrenome = "Alves"
pessoas[1].altura = 50

let pessoaEncontrada = pessoas.find(buscarPessoa)

console.log(pessoaEncontrada)

console.table(pessoas)
// console.log(pessoa.nome)