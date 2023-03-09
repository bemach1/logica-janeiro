/* Enunciado 
fonte: https://neps.academy/br/exercise/134
*/

/* Atribuiu o modulo ou as funcinalidades do 
modulo prompt-sync a variavel prompt  */
const prompt = require('prompt-sync')();

/* Recebendo os valores do console e atribuindo nas variaveis */
let primeiroNumero = Number(prompt('Entre com o primeiro número da soma: '));
let segundoNumero = Number(prompt('Entre com o segundo número da soma: '));

// Verifico se os numeros digitados são menores que 1000 e se são números
if(primeiroNumero < 1000 && segundoNumero < 1000 
    && !isNaN(primeiroNumero) && !isNaN(segundoNumero) ){
    console.log('Resultado da Soma', primeiroNumero + segundoNumero);
}else{ // Senao
    console.log('Tipos de dados recebidos inválidos',primeiroNumero + ' ' + segundoNumero );
}

