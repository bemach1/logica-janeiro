import dadosArquivos from './dados.js'

export function LerArquivoExtrato(ano){
    
    const anoCorrente = new Date().getFullYear()
    
    const encontrado = dadosArquivos.find(item => item.ano == ano)

    if(encontrado == undefined){
        throw new ReferenceError("Ano não encontrado")
    }

    if(ano >= anoCorrente){
        throw new Error("Não pode buscar anos acima do ano corrente")
    }

    return encontrado
}

export function ProcessarArquivoExtrato(arquivo){
    console.log(`Processando arquivo ${arquivo}`)
}

export default LerArquivoExtrato