const caixa1 = document.getElementById("caixa1")
const btn_c1 = document.querySelectorAll(".c1")
const cursos = ['HTML', 'CSS', 'JS', 'MYSQL', 'REACT', 'CSS2']

cursos.map((el,chave)=>{
    const tot = chave + 1
    const novoElemento = document.createElement("div")
    caixa1.appendChild(novoElemento)
    novoElemento.innerHTML = el
    novoElemento.setAttribute ('id', 'c' + tot)
    novoElemento.setAttribute ('class', 'curso c1')
})


const novoElemento = document.createElement("div") //Cria um novo elemento DIV
caixa1.appendChild(novoElemento) //Adiciona o novoElemento na div caixa1
novoElemento.innerHTML = 'Micael' //Altera o texto do novoElemento
novoElemento.setAttribute("id", "c7") //Adiciona atributos como id e o valor de id
novoElemento.setAttribute("class", "curso c1") //Adiciona atributos como class e o valor da class
