const caixa = document.getElementsByClassName("caixa")
const cursos = ["HTML", "CSS", "JS", "C++", "SQL", "REACT"]
const btn_antes = document.getElementById("btn_antes")
const btn_depois = document.getElementById("btn_depois")
const btn_remove = document.getElementById("btn_remove")
const btn_select = document.getElementById("btn_select")
const nomeCurso = document.getElementById("input1")

let indice = 0

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "cursoc1")
    novoElemento.innerHTML = curso
    
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return  novoElemento
}


cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixa1.appendChild(novoElemento)
    indice++
})

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}


btn_select.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
      const cursoSelecionado = rs.parentNode.previousSibling.textContent
    alert("Você selecionou o curso: " + cursoSelecionado)  
    } else {
        alert("Selecione um curso")
    }  
})


btn_remove.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()    
    } catch {
        alert("Selecione um curso")
    }
    
})

btn_antes.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(novoCurso, cursoSelecionado)
    } catch {
        alert("Adicione um curso")
    }
})

btn_depois.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(novoCurso, cursoSelecionado.nextSibling)
    } catch {
        alert("Adicione um curso")
    } 
})





