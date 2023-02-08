const prompt_sync = require('prompt-sync')
const prompt = prompt_sync()

let opcaoContinuar = true

while(opcaoContinuar == true){
    console.log("Esse é o jogo Jonkenpo")
    console.log("Digite 0 para Pedra")
    console.log("Digite 1 para Papel")
    console.log("Digite 2 para Tesoura")
    console.log("Ou digite 'S' para sair")

    let opcaoJogador = prompt().toUpperCase()

    if(opcaoJogador != 'S'){
        if(opcaoJogador == '0' || opcaoJogador == '1' || opcaoJogador == '2' ){
            let opcaoMaquina = Math.random() * 3
            
            opcaoJogador = Number(opcaoJogador)
            opcaoMaquina = Math.floor(opcaoMaquina)
            
            console.log(`Opcao do computador foi ${opcaoMaquina}`)
            /**
             * EU 0 E MAQ 2
            *      OU
            * EU 1 E MAQ 0
            *      OU
            * EU 2 E MAQ 1
            */
            if( 
                (opcaoJogador == 0 && opcaoMaquina == 2) || 
                (opcaoJogador == 1 && opcaoMaquina == 0) || 
                (opcaoJogador == 2 && opcaoMaquina == 1)
            ){
                console.log("Parabéns você venceu")
            }else if(opcaoJogador == opcaoMaquina)
            {
                console.log("Você empatou")
            }else{
                console.log("Você pedeu")
            }
        }else{
            console.log("Opção invalida")
        }
    }else{
        opcaoContinuar = false 
    }
    
    // let opcaoValida = false

    // while(!opcaoValida){
    //     console.log("Deseja continuar S ou N?")
    //     opcaoContinuar = prompt().toUpperCase()
    
    //     if(opcaoContinuar != 'N' && opcaoContinuar != 'S'){
    //         console.log("Opção invalida")
    //     }
    //     else{
    //         opcaoValida = true
    //     }
    // }
}