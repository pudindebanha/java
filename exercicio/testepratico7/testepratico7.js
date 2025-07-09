const caixa = document.getElementsByClassName("caixa")
const cursos = ["HTML", "CSS", "JS", "C++", "SQL", "REACT"]
const btn_add = document.getElementById("btn_add")
const btn_remove = document.getElementById("btn_remove")
const btn_select = document.getElementById("btn_select")

cursos.map((el,chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+chave)
    novoElemento.setAttribute("class", "cursoc1")
    novoElemento.innerHTML = el
    
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixa1.appendChild(novoElemento)
})

btn_select.addEventListener("click", (evt)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    radioSelecionado=radioSelecionado[0]
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert("Você selecionou o curso: " + cursoSelecionado)

})





