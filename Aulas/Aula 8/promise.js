// console.log("INICIO")
//     setTimeout(() => {
//         console.log("OLA")
//     },2000)

//     setInterval(() => {
//         console.log("MAIS UMA VEZ")
//     },1000)
    
//     console.log("FIM")


// function teste() {
//     this.nome = "TESTE"

//     const pessoa = {
//         nome: "Wesdras",
//         exec: () => { 
//             console.log(this.nome)
//         },
//         exec2:function(){
//             console.log(this.nome)
//         }
//     }
//     pessoa.exec()
//     pessoa.exec2()
// }

// teste()

let consulta = new Promise((resolve, reject) => {

    const fn = (contadorFunc) => {
        setTimeout((contadorInterno) => {
            console.log(contadorInterno)
            if(contadorInterno == 3){
                resolve(contadorInterno)
            }else{
                fn(++contadorInterno);
            }
        },1000,contadorFunc)
    }

    fn(0)
})

function resolverPromise(numeroFinal){
    console.log("O numero final foi")
    console.log(numeroFinal)
}

console.log("INICIO")
consulta
.then(resolverPromise)
.catch((erro) => {
    console.log("Erro")
    console.log(erro)
}).finally(() => {
    console.log("Fim da execução")
})
console.log("FIM")
