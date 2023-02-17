// {
//     try{
//         const pessoas = [ {nome: "Wesdras"} ]

//         try{
//             console.log(pessoas[1].nome)
//         }
//         catch(erroTentiva1){
//             pessoas[1] = {nome: "Vazio"}
//         }

//         console.log(pessoas[2].nome)
//     }catch(meuErro){
//         console.log("Ocorreu um erro no sistema")
//         console.log("--------------------------")
//         console.log(meuErro)
//     }

// }

// function buscar(item, index){
//     console.log(`Chamou a vez ${index}`)
//     console.log(`Item ${ JSON.stringify(item)}`)
//     return item.ano == 2019
// }


// {
//     let anoTeste = 2019
//     // let achou = [2020,2021, 2015].find(buscar)
//     let achou = [{ano:2019},{ano: 2020},{ano: 2021}, {ano: 2015},{ano:2019}]
//                 .filter((item, index) => {
//                     console.log(`Rodou ${index}`)
//                     return item.ano == anoTeste
//                 } ) 

//     console.log(achou)
// }

// console.log(buscar(2019))

function LerArquivoExtrato(ano){
    const extratosExistentes = [2020,2021,2022,2023]
    const anoCorrente = new Date().getFullYear()
    
    const encontrado = extratosExistentes.find(item => item == ano)

    if(encontrado == undefined){
        throw new ReferenceError("Ano não encontrado")
    }

    if(ano >= anoCorrente){
        throw new Error("Não pode buscar anos acima do ano corrente")
    }

    return encontrado
}

{
    try{
        LerArquivoExtrato(2022)
        console.log("Processar")
    }catch(erro){

        if(erro instanceof ReferenceError){
            console.log("Ocorreu um erro de referencia")
        }else if(erro instanceof Error){
            console.log('Erro normal')
        }

        console.log(erro.message)
    }
    finally{
        console.log("Finalizou")
    }
}