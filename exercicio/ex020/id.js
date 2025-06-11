const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")

const arrayElemento = [dc1,dc2,dc3,dc4,dc5]
 
for(el of arrayElemento)  //Alterando as div por for onde criar uma variavel no caso seria a EL e percorre os elementos com of
    el.innerHTML = "Micael"  

arrayElemento.map((e, i, a) => {  //Alterando as div por map, o E = Elementos I = Index e A = Array
    e.innerHTML = "Gordo"         // Sempre de preferencia ao MAP para percorrer elementos
})

