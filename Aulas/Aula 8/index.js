class Endereco{
    logradouro;
    bairro;
    cep;
}

class Pessoa{
    id;
    endereco;
    #chaveIdenfificacao;

    constructor(id){
        this.id = id
        this.endereco = new Endereco()
    }

    salvar(){
        // console.table(this)
        console.log(`Salvando o id ${this.id} no banco de dados`)
    }
}

class PF extends Pessoa{
    nome;   

    constructor(id, nome){
        super(id)
        this.nome = nome;
    }

    salvar(){
        super.salvar()
        console.log(`Salvando pessoa fisica`)
    }
}

class PJ extends Pessoa{
    RazaoSocial;
}

const pessoaFisica = new PF()
pessoaFisica.nome = "Wesdras";
pessoaFisica.id = 10;
pessoaFisica.endereco.bairro = ""

const pessoaJurica = new PJ();

// if(pessoaFisica instanceof Pessoa){
//     console.log("Ele é uma pessoa")
// }

pessoaFisica.salvar()
pessoaJurica.salvar()


