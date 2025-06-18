const c1 = document.querySelector('#c1') //Busca o DOM da class C1
const c2 = document.querySelector('#c2') //Busca o DOM da class C2

c1.addEventListener("click", ()=>{ //Utiliza a var. acima e add um Evento com a first funcao de click e a second um função anônima
    alert("clico") //Cria um Alert ao clicar em todas as class C1
})


c2.addEventListener("click", (evt)=>{
    const el = evt.target
    el.classList.add("destaque")
})




// const msg = () => {
//     alert("clico")
// }


