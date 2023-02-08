const prompt = require("prompt-sync")()

function CriarCampo(tamanho){
    let campo = []

    for(let linha=0; linha< tamanho;linha++){
        campo[linha] = []
        for(let coluna = 0; coluna < tamanho;coluna++){
            campo[linha][coluna] = { acertar : false, bomba: false}
        }
    }

    return campo
}

function CriarBombas(quantidade, campo){
    let minasCriadas = 0 
    let tamanho = campo.length

    while(minasCriadas < quantidade){
        let linha = Math.floor(Math.random() * tamanho) 
        let coluna = Math.floor(Math.random() * tamanho) 

        if(!campo[linha][coluna].bomba){
            campo[linha][coluna].bomba = true
            minasCriadas++
        }
    }

    return campo
}

function DesenharCampo(campo){
    let campoASerDesenhado = []

    for(let linha=0; linha< campo.length;linha++){
        campoASerDesenhado[linha] = []
        for(let coluna = 0; coluna < campo.length;coluna++){
            campoASerDesenhado[linha][coluna] = "#"

            if(campo[linha][coluna].acertar){
                if(campo[linha][coluna].bomba){
                    campoASerDesenhado[linha][coluna] = "X"
                }
                else{
                    campoASerDesenhado[linha][coluna] = "V"
                }
            }

        }
    }
    console.table(campoASerDesenhado)
}


let tamanhoCampo = Number(prompt("Entre com o tamanho do campo: "))
let quantidadeBombas = Number(prompt("Entre com a quantidade de bombas: "))
let pontos = 0
let vidas = 2

let campoCriado = CriarCampo(tamanhoCampo)
campoCriado = CriarBombas(quantidadeBombas, campoCriado)
let totalPontosMaximo = (tamanhoCampo * tamanhoCampo) - quantidadeBombas

while(vidas > 0 && pontos < totalPontosMaximo){
    console.clear()
    console.log(`Você possui ${vidas} vidas e ${pontos}`)
    DesenharCampo(campoCriado)

    let linhaAcertada = Number(prompt("Entre com a linha: "))
    let colunaAcertada = Number(prompt("Entre com a coluna: "))

    if(!campoCriado[linhaAcertada][colunaAcertada].acertar){
        if(campoCriado[linhaAcertada][colunaAcertada].bomba){
            vidas--
        }else{
            pontos ++
        }
        campoCriado[linhaAcertada][colunaAcertada].acertar = true
    }
}

if(vidas == 0){
    console.log(`Você perdeu com ${pontos} pontos`)
}else{
    console.log(`Você ganhou com ${pontos} pontos`)
}

// console.table(campoCriado)