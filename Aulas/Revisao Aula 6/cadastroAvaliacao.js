import PromptSync from "prompt-sync";

const prompt = PromptSync()
import {ConsultarPorMatricula} from './consultasAluno.js'

export default function TelaCadastroAvaliacao(){
    console.clear()
    console.log("--- Cadastro de Avaliação ---")
    console.log("Entre com a matricula do aluno")
    const matricula = prompt();
    const aluno = ConsultarPorMatricula(matricula)

    let avaliacao = {}
    console.log("Entre com o semestre da avaliação")
    avaliacao.semestre = prompt();
    console.log("Entre com a nota")
    avaliacao.nota = prompt();

    aluno.avaliacoes.push(avaliacao)

    console.log(`Avaliação cadastrada com sucesso\nEnter para continuar...`)
}