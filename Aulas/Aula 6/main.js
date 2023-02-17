import { LerArquivoExtrato, ProcessarArquivoExtrato} from "./arquivo.js"

try{
    const arquivo = LerArquivoExtrato(2022)
    ProcessarArquivoExtrato(arquivo)
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