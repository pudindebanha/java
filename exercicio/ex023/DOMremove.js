const caixa1 = document.getElementById("caixa1")//Utiliza o ID do HTML e passa para o JS
const btn_c1 = document.querySelectorAll(".c1")//Utiliza o ID do HTML e passa para o JS
const cursos = ['HTML', 'CSS', 'JS', 'MYSQL', 'REACT',]//Cria um array com os valores

cursos.map((el,chave)=>{
    const tot = chave + 1
    const novoElemento = document.createElement("div")//Cria um novo elemento DIV
    caixa1.appendChild(novoElemento)//Adiciona o novoElemento na div caixa1
    novoElemento.innerHTML = el//Altera o texto do novoElemento
    novoElemento.setAttribute ('id', 'c' + tot)//Adiciona atributos como id e o valor de id
    novoElemento.setAttribute ('class', 'curso c1')//Adiciona atributos como class e o valor da class
    novoElemento.addEventListener('click', (evt)=>{//Deve criar um Event para remover e ter o click
        caixa1.removeChild(evt.target) //Deve adioconar o remove child no pai do elemento que vai ser removido
    })
})

