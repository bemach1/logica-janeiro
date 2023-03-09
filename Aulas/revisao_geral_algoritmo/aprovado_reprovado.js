/* Atribuiu o modulo ou as funcinalidades do 
modulo prompt-sync a variavel prompt  */
const prompt = require('prompt-sync')();

// Verificando as condições de aprovação
function statusAprovacaoAluno(valorMedia){
    if( valorMedia >=7){
        console.log('Aprovado');
    }else if (valorMedia>=4){
        console.log('Recuperação');
    }else{
        console.log('Reprovado');
    }
}

/* Receber as notas do aluno */
let notaPrimeiraProva = Number(prompt('Entre com a nota da primeira prova: '));
let notaSegundaProva = Number(prompt('Entre com a nota da primeira prova: '));
// Calculando a média
let media = (notaPrimeiraProva + notaSegundaProva)/2;

if( notaPrimeiraProva >= 0 && notaPrimeiraProva <= 10 
    && notaSegundaProva >= 0 && notaSegundaProva <= 10 
    && !isNaN(notaPrimeiraProva) && !isNaN(notaSegundaProva) 
){
    statusAprovacaoAluno(media);

}else{
    console.log('Dados digitados inválidos para cálculo');
}