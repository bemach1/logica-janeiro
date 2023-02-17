import PromptSync from 'prompt-sync'
const prompt = PromptSync()
import dados from './dados.js'
import { exibirDadosBasicosAluno, exibirTableAluno } from './exibirDados.js'

export function ConsultarPorMatricula(matricula){

    const alunoEncontrado = dados.find(aluno => aluno.matricula == matricula)

    if(alunoEncontrado == undefined){
        throw new Error(`Aluno com matricula ${matricula} não foi encontrado`)
    }

    return alunoEncontrado
}

function ConsultarPorNome(nome){
    const alunosEncontrado = dados.filter(aluno => aluno.nome.toLowerCase().indexOf(nome.toLowerCase()) != -1)
    return alunosEncontrado
}


export function TelaConsultarAlunoPorMatricula(){
    console.clear()
    console.log('--- Consulta por matricula ---')
    console.log("Entre com a matricula a ser buscada:")
    const matricula = prompt()
    const aluno = ConsultarPorMatricula(matricula)
    exibirTableAluno(aluno)
    prompt("Enter para continuar...")
}   


export function TelaConsultarAlunosPorNome(){
    console.clear()
    console.log('--- Consulta por nome ---')
    console.log("Entre com parte do nome a ser buscada:")
    const nome = prompt()
    const alunos = ConsultarPorNome(nome)
    for(let aluno of alunos){
        exibirDadosBasicosAluno(aluno)
        console.log("---------------------------")
    }
    prompt("Enter para continuar...")
}   