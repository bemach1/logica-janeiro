class Pessoa{
    #cpf = "";

    get cpf(){
        return `O CPF é: ${this.#cpf}`
    }

    set cpf(value){
        let cpf = value.replace(".",'');
        cpf = cpf.replace(".",'');
        cpf = cpf.replace("-",'');

        if(cpf.length != 11){
            throw new Error("CPF inválido")
        }

        this.#cpf = cpf;
    }
}

let pessoa1 = new Pessoa();
pessoa1.cpf = "123.456.789-09"


console.log(pessoa1.cpf)
// pessoa1.CPF = "123.456.789-09"
// pessoa1.CPF = "12345678909"