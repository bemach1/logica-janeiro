class Aluno{
    nome = "";
    sobrenome = "";
    primeiraLetra = ""
    matricula = "";
    #avaliacoes = [];

    constructor(nome, sobrenome, matricula){
        this.nome = nome
        this.sobrenome = sobrenome
        this.matricula = matricula
        this.primeiraLetra = nome[0]
    }

    get Avaliacoes(){
        return this.#avaliacoes
    }

    get NomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    renderDados(){
        console.table(this)
    }
 
    adicionarAvaliacao(avaliacao){
        if(!(avaliacao instanceof Avaliacao)){
            throw new Error("Não é uma avaliacao valida.")
        }

        this.#avaliacoes.push(avaliacao)
    }
}

class Avaliacao{
    tipo= "";
    nota= 0;

    constructor(tipo,nota){
        this.nota = nota;
        this.tipo = tipo;
    }
}

class Turma{
    numero;
    #alunos= [];
    #LIMITE = 2;

    construtor(numero){
        this.numero = numero
    }

    adicionarAluno(aluno){
        if(!(aluno instanceof Aluno)){
            throw new Error("Não é um aluno valida.")
        }

        if(this.#alunos.length >= this.#LIMITE){
            throw new Error("Limite alcancado")
        }
        
        this.#alunos.push(aluno)
    }
    
    exibirAlunos(){
        console.table(this.#alunos)
    }
}

let alunos = [];

alunos.push(new Aluno("wesdras", "alves","123"))
alunos.push(new Aluno("pedro", "silva", "456"))
alunos.push(new Aluno("Jose", "castro", "963"))

let avaliacao1 = new Avaliacao("teste",8)

alunos[0].adicionarAvaliacao(avaliacao1)

// let auxiliar = new Aluno()
// console.log(auxiliar instanceof Aluno)

alunos[0].nome = "Jose"
alunos[0].Avaliacoes = []

// console.table(alunos[0].Avaliacoes)

alunos[0].renderDados()

let turma = new Turma("T1")

try{
    console.log(alunos[0].NomeCompleto)
    turma.adicionarAluno(alunos[0])
    turma.exibirAlunos()
    turma.adicionarAluno(alunos[1])
    turma.exibirAlunos()
    turma.adicionarAluno(alunos[2])
    turma.exibirAlunos()
}
catch(err){
    console.log(err.message)
}
