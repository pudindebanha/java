//Números
const p_array = document.getElementById("array")
const input = document.getElementById("input")
const btnPesquisar = document.getElementById("btn_pesquisar")
const resultado = document.getElementById("resultado")

//Nomes
const p_array2 = document.getElementById("array2")
const input2 = document.getElementById("input2")
const btnPesquisar2 = document.getElementById("btn_pesquisar2")
const resultado2 = document.getElementById("resultado2")

const elementos_array2 = ["Micael", "Jorge", "Elionaia", "Rafael", "Gabriel"]
p_array2.innerHTML = "["+elementos_array2+"]"

const elementos_array = [1, 10, 25, 6, 8, 15, 12, 30]
p_array.innerHTML = "["+elementos_array+"]"

//Pesquisar numero
btnPesquisar.addEventListener("click", (evt)=>{
    const ret =elementos_array.find((e,i)=>{
        if(e == input.value) {
            resultado.innerHTML = "Valor encontrado "+e+" na posição "+i
            return true
        } else {
            resultado.innerHTML = "Valor não encontrado, tente novamente!"
        }
    })    
})

//Pesquisar nome
btnPesquisar2.addEventListener("click", (evt)=>{
    resultado2.innerHTML = "Valor não encontrado, tente novamente!"
    elementos_array2.find((ele,ind)=>{
        if(ele.toUpperCase() === input2.value.toUpperCase()){
            resultado2.innerHTML = "Valor encontrado "+ele.toUpperCase()+" na posição "+ind          
        }
    })
})


