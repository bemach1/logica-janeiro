/**
 * Sistema de cadastro de aluno de Faculdade
 * 
 * - Menu com as opções
 * - Função de cadastrar aluno com os seguinte dados
 *      Nome, Turma, Matricula, Avaliações
 * - Cadastro de avaliações
 *      Avaliacao com a nota e semestre
 * - Listar todos alunos Aprovados
 * - Buscar dados de uma aluno pela matricula
 * - Buscar alunos por parte do nome
 * - Exclusão de aluno pela matricula
 * - Alteração de aluno pela matricula
 */
import promptSync from 'prompt-sync'
import TelaCadastrarAluno from './cadastroAluno.js';
import TelaCadastroAvaliacao from './cadastroAvaliacao.js';
import { TelaConsultarAlunoPorMatricula, TelaConsultarAlunosPorNome } from './consultasAluno.js';
import dados from './dados.js'

const prompt = promptSync()
const opcoesPermitidas = [
    {opcao: 1, texto : "1 - Para cadastrar novo aluno"},
    {opcao: 2, texto : "2 - Cadastro de Avaliação"},
    {opcao: 3, texto : "3 - Buscar Aluno por matricula"},
    {opcao: 4, texto : "4 - Buscar Aluno por nome"},
    {opcao: 9, texto : "9 - Sair"}
]

let opcao = null;

do{
    console.clear()
    console.log("Seja Bem vindo ao sistema de cadastro de aluno")
    opcoesPermitidas.forEach(menu => console.log(menu.texto))
    opcao = Number(prompt())

    try{
        if(opcoesPermitidas.find(menu => menu.opcao == opcao) == undefined){
            throw new Error("Opção inválida")
        }

        switch(opcao){
            //Cadastro de usuario
            case 1:
                TelaCadastrarAluno()
                break;
            case 2:
                TelaCadastroAvaliacao()
                break;
            case 3: 
                TelaConsultarAlunoPorMatricula();
                break;
            case 4: 
                TelaConsultarAlunosPorNome();
                break;

        }
    }
    catch(erro){
        console.clear()
        console.log("Erro")
        console.log(erro.message)
        prompt("Enter para continuar...")
    }
}while(opcao!=9)
