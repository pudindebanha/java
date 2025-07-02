const caixa1 = document.getElementById("caixa1")
const btn_c1 = document.querySelectorAll(".c1")

const novoElemento = document.createElement("div") //Cria um novo elemento DIV
caixa1.appendChild(novoElemento) //Adiciona o novoElemento na div caixa1
novoElemento.innerHTML = 'Micael' //Altera o texto do novoElemento
novoElemento.setAttribute("id", "c7") //Adiciona atributos como id e o valor de id
novoElemento.setAttribute("class", "curso c1") //Adiciona atributos como class e o valor da class


console.log(btn_c1[0].getRootNode()) //Buscar o Nó Raiz
console.log(caixa1.ownerDocument) //Buscar o Nó Raiz


console.log(caixa1.children) //Busca os filhos da div Caixa
console.log(caixa1.firstChild) //Busca o Primeiro filho da div Caixa
console.log(caixa1.lastChild) //Busca o Ultimo filho da div Caixa


console.log(caixa1.hasChildNodes()) //Busca saber se dentro da caixa div existem filhos! Resultado: True
if(btn_c1[0].children.length > 0){
    console.log("True") //Verifica se o btn children e maior que um, sendo assim mostra se tem mais elementos dentro da div btn_c1
} else { console.log("False") }   
console.log(btn_c1[0].children.length > 0 ? "Verdade" : "Falso") //Jeito mais simplificado


console.log(caixa1.children[1].innerHTML = 'Troquei 1') //Altera o texto da segunda div dentro da div caixa
console.log(caixa1.firstElementChild.innerHTML = 'Micael')//Altera o texto da primeira div dentro da div caixa
console.log(caixa1.lastElementChild.innerHTML = 'MI-K')//Altera o texto da ultima div dentro da div caixa


console.log(btn_c1[0].parentNode) //Busca o pai da div btn_c1, que no caso é a div caixa1
console.log(btn_c1[0].parentNode.children[4])//Busca o pai da div btn_c1 (caixa1) e procura o filho[4] que no caso é (SQL)
