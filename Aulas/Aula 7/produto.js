class Produto{
    nome = "";
    preco = 0;
    #quantidade = 0;

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    adicionarQuantidade(quantidadeEstoque){
        if(quantidadeEstoque < 0){
            throw new Error("Quantidade inválida")
        }

        this.#quantidade += quantidadeEstoque
        console.log(`Nova quantidade é: ${this.#quantidade}`)
    }

    vender(quantidade){
        if(quantidade < 0){
            throw new Error("Quantidade inválida")
        }

        if(this.#quantidade < quantidade){
            throw new Error("Não possui essa quantidade de produtos")
        }

        this.#quantidade -= quantidade
        console.log(`Nova quantidade é: ${this.#quantidade}`)
    }



}


module.exports = Produto