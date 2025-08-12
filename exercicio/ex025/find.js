const p_array = document.getElementById("array")
const input = document.getElementById("input")
const btnPesquisar = document.getElementById("btn_pesquisar")
const resultado = document.getElementById("resultado")

const elementos_array = [10,2,3,15,22,30,40]
p_array.innerHTML = "["+elementos_array+"]"

btnPesquisar.addEventListener("click", (evt)=>{
    const ret =elementos_array.find((e,i)=>{
        if(e === input.value) {
            return true
        }
    })  
    console.log(ret);
    
})


