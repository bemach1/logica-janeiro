const prompt = require("prompt-sync")()
const Produto = require("./produto.js")

let produtos = []

let opcao = "S"

do{
    console.log("C = Cadastrar")
    console.log("A = Adicionar no estoque")
    console.log("V = Venda do Produto")
    console.log("S = Sair")
    opcao = prompt("Entre com a opcao: ")

    switch(opcao){
        case "C":
            let nomeProd = prompt("Entre com o nome do produto: ")
            let preco = prompt("Entre com o preco do produto: ")

            let produto = new Produto(nomeProd, preco);

            produtos.push(produto)
            break;
        case "A":
            let quantidadeEstoque = Number(prompt("Entre com a quantidade: "))
            let produtoBuscado = produtos[0];

            produtoBuscado.adicionarQuantidade(quantidadeEstoque)
            break;
        case "R":
            let quantidadeVenda = Number(prompt("Entre com a quantidade a ser vendido: "))
            let produtoBuscadoVenda = produtos[0];

            produtoBuscadoVenda.vender(quantidadeVenda)
            break;
    }
}while(opcao != "S")

console.table(produtos)