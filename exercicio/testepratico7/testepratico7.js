const caixa = document.getElementsByClassName("caixa")
const cursos = ["HTML", "CSS", "JS", "C++", "SQL", "REACT"]
const btn_antes = document.getElementById("btn_antes")
const btn_depois = document.getElementById("btn_depois")
const btn_remove = document.getElementById("btn_remove")
const btn_select = document.getElementById("btn_select")
const nomeCurso = document.getElementById("input1")

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "cursoc1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return  novoElemento
}


cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixa1.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}


btn_select.addEventListener("click", (evt)=>{
    try{
        alert("Você selecionou o curso: " + cursoSelecionado().innerHTML)  
    } catch(ex) {
        alert("Selecione um curso")
    }  
})


btn_remove.addEventListener("click", (evt)=>{
    const cs = cursoSelecionado()
    if(cs != undefined){
        cs.remove()    
    } else {
        alert("Selecione um curso")
    }
    
})

btn_antes.addEventListener("click", (evt)=>{
    try{
        if(nomeCurso.value != ""){
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert("Digite um curso")
        }
    } catch(ex) {
        alert("Adicione um curso")
    }
})

btn_depois.addEventListener("click", (evt)=>{
    try{
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(novoCurso, cursoSelecionado().nextSibling)
    } catch (ex) {
        alert("Adicione um curso")
    } 
})





