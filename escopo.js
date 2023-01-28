//Explicando escopo - CARREFOUR
let precoDaCoca = 3.0;
let estacionamento = 5.0;

console.log("1 - Preço da Coca do Carrefour: " + precoDaCoca);
//Escopo - Lanchonete do Zé (Dentro do Carrefour)
{
    let precoDaCoca = 4.5;
    let precoDaCoxinha = 7;
    let precoDoBombom = 2;
    let total = precoDaCoca + precoDaCoxinha;
    
    //Escopo do vendedor ambulante
    {
        let precoDoBombom = 1.5;
        console.log("Preço do bombom do ambulante: " + precoDoBombom);
        console.log("Perguntei ao ambulante o preço do estacionamento: " + estacionamento);
        estacionamento = estacionamento - 0.5;
    }

    console.log("Bombom do Zé: " + precoDoBombom);
    console.log("Preço da Coca do Zé: " + precoDaCoca);
    console.log("Perguntei ao Zé o preço do estacionamento: " + estacionamento);
}

console.log("2 - Preço da Coca do Carrefour: " + precoDaCoca);
console.log("Pagar o estacionamento com desconto do Zé: " + estacionamento);