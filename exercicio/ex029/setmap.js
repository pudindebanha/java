const caixa = document.getElementById("caixa")

let musica = new Set(["musica1", "musica2", "musica3",]) //Cria uma Variavel com o metodo SET e inserindo elementos nela, lembre sempre dos []

musica.add("musica4")//Add um elemento novo dentro da Variavel musica
musica.add("musica4")//No metodo SET não tem como repetir um elemento

console.log(musica)

musica.forEach((elementos)=>{ //Utiliza o metodo FOREACH que fica dentro do metodo MAP, funciona igual a um for of
    caixa.innerHTML += elementos + "</br>"
})


//Ou se preferir pode utilizar o metodo FOR OF
for(let m of musica){
    caixa.innerHTML += m + "</br>"
    console.log(m)//Mostra o que tem dentro da Variavel M
}
