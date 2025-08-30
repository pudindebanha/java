const caixa = document.getElementById("caixa")

let mapa = new Map() //Transforma minha variavel mapa em um map colection

//Cria uma coleção utilizando o SET
mapa.set("Micael", 1)
mapa.set(2, "Jorge")
mapa.set(3, "Elionaia")
mapa.set(4, "Rafael")
mapa.set(5, "Gabriel")

mapa.delete(5)

mapa.forEach((el)=>{
    console.log(el)
    
})

if(mapa.has("Micael")){ //Utiliza o if para saber se existe ou não a chave na minha coleção utilizando o HAS
    caixa.innerHTML = 'A chave está na coleção,'//Se caso existe "Micael" mostra que tem na coleção
}else {
    caixa.innerHTML = 'A chave NÃO está na coleção </br> O tamanho da coleção e: ' + mapa.size//Se caso nao existe "Micael", mostra o resultado que não tem na coleção
}
caixa.innerHTML += '</br> O tamanho da coleção e: ' + mapa.size


caixa.innerHTML = "O tamano da coleção é " + mapa.size + "</br> Com o valor: " + mapa.get(2)//Altera o texto dentro da minha caixa, buscando o valor da chave 1 no caso "Micael"





