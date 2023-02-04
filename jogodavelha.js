const prompt = require('prompt-sync')();
const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let jogador = "O"; //Jogador 1 = O e Jogador 2 = X

//Função que retorna o jogador e símbolo a ser marcado no tabuleiro
function buscaJogador() {
    return jogador;
}

//Função que troca o jogador no tabuleiro
function trocaJogador() {
    if (jogador === "O") {
        jogador = "X"
    } else {
        jogador = "O"
    }
}

//Função que conta a jogada
function verificaTabuleiroCheio() {
    let tabuleiroCheio = true;

    for (let i in tabuleiro) {
        for (let j in tabuleiro[i]) {
            if (tabuleiro[i][j] === "") {
                tabuleiroCheio = false;
                break;
            }
        }
    }

    return tabuleiroCheio;
}

//Função que marca no tabuleiro
function marcaJogada(espacoDoTabuleiro) {
    let jogadorDaVez = buscaJogador();
    let jogadaValida = false;

    switch (espacoDoTabuleiro) {
        case 1:
            if(tabuleiro[0][0] === ""){
                tabuleiro[0][0] = jogadorDaVez;
                jogadaValida = true;
            }            
            break;
        case 2:
            if(tabuleiro[0][1] === ""){
                tabuleiro[0][1] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 3:
            if(tabuleiro[0][2] === ""){
                tabuleiro[0][2] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 4:
            if(tabuleiro[1][0] === ""){
                tabuleiro[1][0] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 5:
            if(tabuleiro[1][1] === ""){
                tabuleiro[1][1] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 6:
            if(tabuleiro[1][2] === ""){
                tabuleiro[1][2] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 7:
            if(tabuleiro[2][0] === ""){
                tabuleiro[2][0] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 8:
            if(tabuleiro[2][1] === ""){
                tabuleiro[2][1] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
        case 9:
            if(tabuleiro[2][2] === ""){
                tabuleiro[2][2] = jogadorDaVez;
                jogadaValida = true;
            }
            break;
    }

    return jogadaValida;
}

//Função que verifica ganhador
function verificaGanhador() {
    let jogadorDaVez = buscaJogador();
    let jogadorVenceu = false;

    //1ª checagem -> Linhas
    if ((jogadorDaVez === tabuleiro[0][0] && jogadorDaVez === tabuleiro[0][1] && jogadorDaVez === tabuleiro[0][2])
        || (jogadorDaVez === tabuleiro[1][0] && jogadorDaVez === tabuleiro[1][1] && jogadorDaVez === tabuleiro[1][2])
        || (jogadorDaVez === tabuleiro[2][0] && jogadorDaVez === tabuleiro[2][1] && jogadorDaVez === tabuleiro[2][2])) {
        jogadorVenceu = true;
    }

    //2ª checagem -> Colunas
    if ((jogadorDaVez === tabuleiro[0][0] && jogadorDaVez === tabuleiro[1][0] && jogadorDaVez === tabuleiro[2][0])
        || (jogadorDaVez === tabuleiro[0][1] && jogadorDaVez === tabuleiro[1][1] && jogadorDaVez === tabuleiro[2][1])
        || (jogadorDaVez === tabuleiro[0][2] && jogadorDaVez === tabuleiro[1][2] && jogadorDaVez === tabuleiro[2][2])) {
        jogadorVenceu = true;
    }

    //3ª checagem -> Diagonais
    if ((jogadorDaVez === tabuleiro[0][0] && jogadorDaVez === tabuleiro[1][1] && jogadorDaVez === tabuleiro[2][2])
        || (jogadorDaVez === tabuleiro[0][2] && jogadorDaVez === tabuleiro[1][1] && jogadorDaVez === tabuleiro[2][0])) {
        jogadorVenceu = true;
    }

    return jogadorVenceu;
}

//Executa toda a lógica do jogo
function iniciaGame() {
    let jogoEmAndamento = true;
    
    while (jogoEmAndamento) {

        console.table(tabuleiro);
        console.log(`Vez do jogador ${buscaJogador()}`);

        let jogadaValida = false;

        //Previne que jogador marque a mesma casa
        while(!jogadaValida){
            let jogada = Number(prompt("Faça o seu movimento -> "));
            if( !marcaJogada(jogada) ){
                console.log("Esta casa já está ocupada. Escolha outra.");
                console.table(tabuleiro);
            }else{
                jogadaValida = true;
            }            
        }
        
        //Verifica os casos de encerramento do jogo
        if (verificaGanhador()) {
            console.log(`O jogador "${buscaJogador()}" venceu`);
            jogoEmAndamento = false;
        } else {
            if (verificaTabuleiroCheio()) {
                console.log(`O jogo empatou`);
                jogoEmAndamento = false;
            }
        }
         
        //Troca o jogador no fim do turno
        trocaJogador();
        
    }

}

//inicia o jogo
iniciaGame();