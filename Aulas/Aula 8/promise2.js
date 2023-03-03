// async function Executar(){
//     const buscarNoBanco = () => {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve({dados: [1,2,3,4]})
//                 },2000)
//             })
//         }

//     let resultado = await buscarNoBanco()
//     console.log(resultado)
//     return resultado
// }
// (async () => {
//     console.log("INICIO");
//     console.log( Executar())
//     console.log("FIM");
// })();


async function BuscarNoBanco(id){
    console.log(`Buscando id ${id}`)
    const fn = new  Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve({dados: [1,2,3,4]})
            },2000)
        })

    let resultado = await fn
    console.log("FIM DO BANCO")
    return resultado
}

class Pessoa{
    id;
    async buscarPorId(){
        let dados = await BuscarNoBanco(this.id)
        console.log("FIM DA BUSCA")
        console.log(`Dados`)
        console.table(dados)
    }
}

let pessoa = new Pessoa()
pessoa.id = 10
pessoa.buscarPorId()
console.log("FIM DO CODIGO")