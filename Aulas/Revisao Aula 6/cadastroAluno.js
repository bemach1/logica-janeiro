import PromptSync from "prompt-sync";
import dados from './dados.js'

const prompt = PromptSync()

//Nome, Turma, Matricula, Avaliações
function CapturarDados(){
    let aluno = {}

    console.clear()
    console.log("--- Cadastro Aluno ---")
    // console.log("Entre com o Matricula do aluno")
    // aluno.matricula = prompt()
    aluno.matricula = dados.length +1
    aluno.matricula = aluno.matricula.toString().padStart(5,'0')

    console.log(`Matricula aluno é ${aluno.matricula}`)
    console.log("Entre com o nome do aluno")
    aluno.nome = prompt()
    console.log("Entre com o número da turma")
    aluno.turma = prompt()

    aluno.avaliacoes = []

    return aluno
}

export default function TelaCadastrarAluno(){
    const aluno = CapturarDados()
    dados.push(aluno)
    prompt("Cadastrado com sucesso\nEnter para continuar...")
}