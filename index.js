/*
    - Trazendo exemplo de como funciona o JS no browser e como funciona do Node
    - console.log e console.error
    - Falando sobre escopo
    - Variavel (var, let, const)
    - Tipos de variavel (Numero, string e boleano)
    - Tipos de string com aspas duplas, simples e template string
    - Operadores associativos "=" 
    - Operadores aritiméticos (+, -, *, /)
    - Operadores Associativos (<, >, !=, == )
*/
const prompt = require('prompt-sync')();

let valorParaCalculo = Number( prompt('Informe um valor ') );
let taxaDeJuros = Number( prompt('Informe a taxa ') );

let valorComJuros = valorParaCalculo + ( valorParaCalculo * taxaDeJuros / 100 );

console.log("O valor atualizado é de: " + valorComJuros);


/*
    console.log(typeof valorParaCalculo);
    console.log(valorParaCalculo);
    console.log(typeof taxaDeJuros);
    console.log(taxaDeJuros);
*/
