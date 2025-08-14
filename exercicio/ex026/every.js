const p_array = document.getElementById("array")
const btn_verificar = document.getElementById("btn_verificar")
const resultado = document.getElementById("resultado")

const elementos_array = [19,126,22,24,25,26,31]
p_array.innerHTML = elementos_array

btn_verificar.addEventListener("click", (evt)=>{
    resultado.innerHTML = 'Não conforme'
    const ret = elementos_array.every((e,i)=>{
        if(e <= 18){
            resultado.innerHTML = "Resultado não conforme na posição "+i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML = 'OK'
    }
})