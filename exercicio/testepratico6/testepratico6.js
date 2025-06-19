const caixa1 = document.getElementById("caixa 1")
const caixa2 = document.getElementById("caixa 2")
const btn = document.getElementById("btn_copiar")
const btn_voltar = document.getElementById("btn_voltar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) =>{
    el.addEventListener("click", (evt) =>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", ()=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map((el) => {
        caixa2.appendChild(el)
    })
})

btn_voltar.addEventListener("click", ()=>{
    const selecionadosV = [...document.querySelectorAll(".selecionado")]
    selecionadosV.map((el) => {
        caixa1.appendChild(el)
    })
})
