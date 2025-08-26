// const p_array = document.getElementById("array")
// const btn_verificar = document.getElementById("btn_verificar")
// const resultado = document.getElementById("resultado")

// const elementos_array = [11,12,2,24,10,16,15]
// p_array.innerHTML = elementos_array

// btn_verificar.addEventListener("click", (evt)=>{
//     resultado.innerHTML = 'Não conforme'
//     const ret = elementos_array.some((e,i)=>{
//         if(e >= 18){
//             resultado.innerHTML = "Array não conforme na posição "+i
//         }
//         return e>=18
//     })
//     if(ret){
//         resultado.innerHTML = 'OK'
//     }
// })



// Cria um array de numeros
const arrays = [[1, 2], [3, 4], [5]];

const flat = arrays.reduce((acc, arr) => acc.concat(arr), []);

console.log(flat); //Resultado [1, 2, 3, 4, 5]