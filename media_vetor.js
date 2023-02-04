const prompt = require('prompt-sync')();
const notas = [];
let executaAdicao = true;

while (executaAdicao) {
    let numeroAdd = Number(prompt("Informe uma de suas notas: "));
    notas.push(numeroAdd);
    executaAdicao = ("S" === prompt("Deseja adicionar mais uma nota? S/N -> "));
}

console.log(`Você informou ${notas.length} notas.`);

let somatoriaDeNotas = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

console.log(notas);

for (let key in notas) {
    //Somando para extrair a média
    somatoriaDeNotas += notas[key];

    //Encontrando a maior nota
    if (notas[key] > maiorNota) {
        maiorNota = notas[key];
    }

    //Encontrando a menor nota
    if (notas[key] < menorNota) {
        menorNota = notas[key];
    }

}
console.log(`Sua média é de: ${somatoriaDeNotas / notas.length}`);
console.log(`Sua maoir nota foi: ${maiorNota}`);
console.log(`Sua menor nota foi: ${menorNota}`);