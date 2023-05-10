//Promesa
function sumarUnoPromesa(num){
    console.log(num)
    var promesa = new Promise(function(resolve, reject){
        if(num >= 7){
            reject('Número muy grande')
            return
        }
        setTimeout(() =>{
            resolve(num+1);
        }, 2000)
    }) 
    return promesa
}

// sumarUnoPromesa(5).then((nuevoValor) => {
//     console.log(nuevoValor)
//     sumarUnoPromesa(nuevoValor).then((nuevoValor) => {
//         console.log(nuevoValor)
//         sumarUnoPromesa(nuevoValor).then((nuevoValor) => {
//             console.log(nuevoValor)
//         })
//     })
// })

// con el .then atiendes la promesa devuelta
// sumarUnoPromesa(5).then(nuevoValor => {
//     console.log(nuevoValor)
//     return sumarUnoPromesa(nuevoValor);
// })
// .then(nuevoValor =>{
//     console.log(nuevoValor)
// })

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch((err)=>{
    console.log(err)
})