export function exibirTableAluno(aluno){
    console.log(
        `
        Dados do aluno
        Matricula: ${aluno.matricula}
        Nome: ${aluno.nome}
        Turma: ${aluno.turma}
        --------------------------------
        Avaliações
        ${
        aluno
        .avaliacoes
        .map(avaliacao => `
        Semetre: ${avaliacao.semestre}
        Nota: ${avaliacao.nota}
        `).join('')
        }
        `
    )
}

export function exibirDadosBasicosAluno(aluno){
    console.log(
        `
        Matricula: ${aluno.matricula}
        Nome: ${aluno.nome}
        Turma: ${aluno.turma}
        `
    )
}