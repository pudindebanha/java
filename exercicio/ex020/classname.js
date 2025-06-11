const  c = document.getElementsByClassName("")
const  c = document.getElementsByClassName("")
 
for(el of arrayElemento)  //Alterando as div por for onde criar uma variavel no caso seria a EL e percorre os elementos com of
    el.innerHTML = "Micael"  

arrayElemento.map((e, i, a) => {  //Alterando as div por map, o E = Elementos I = Index e A = Array
    e.innerHTML = "Gordo"         // Sempre de preferencia ao MAP para percorrer elementos
})