const prompt = require("prompt-sync")()

const dadosAlunos = []

let opcaoMenu = ""
const mediaAprovacao = 7

while(opcaoMenu.toUpperCase() != "S"){
    console.clear()
    console.log("O que deseja fazer?")
    console.log("C - Para cadastrar")
    console.log("T - Mostrar todos")
    console.log("B - Buscar usuario por nome")
    console.log("A - Exibir situacao alunos")
    console.log("S - Sair")

    opcaoMenu = prompt()

    switch(opcaoMenu.toUpperCase()){
        case  "C":
            const nomeAluno = prompt("Entre com o nome do aluno: ")
            const notaV1 = Number(prompt("Entre com a nota do V1: "))
            const notaVT = Number(prompt("Entre com a nota do VT: "))
            const notaV2 = Number(prompt("Entre com a nota do V2: "))
        
            dadosAlunos[dadosAlunos.length] = [nomeAluno, notaV1, notaVT, notaV2]
            break;
        case "T":
            console.table(dadosAlunos)
            break;
        case "B":
            let nomeBuscar = prompt("Qual nome deseja buscar: ")

            for(linha in dadosAlunos){
                if(nomeBuscar.toLowerCase() == dadosAlunos[linha][0].toLowerCase() ){
                    console.table(dadosAlunos[linha])
                }
            }
            break;
        case "A":
            for(let linhaTabela = 0; linhaTabela < dadosAlunos.length;linhaTabela++){
                // for(linhaTabela in dadosAlunos){
                    let aluno = dadosAlunos[linhaTabela]
                
                    let somaNotas = (aluno[1] + aluno[2] + aluno[3]) 
                    let mediaAluno = (somaNotas / 3)
                
                    if(mediaAluno >= mediaAprovacao){
                        console.log(`O aluno ${aluno[0]} está Aprovado`)
                    }else{
                        console.log(`O aluno ${aluno[0]} está Reprovado`)
                    }
                }

    }
    prompt("Aperte enter para continuar")
    // // dadosAlunos.push([nomeAluno, notaV1, notaVT, notaV2])
    // opcao = prompt("Deseja continuar cadastrando aluno 'S' ou 'N': ")
}

