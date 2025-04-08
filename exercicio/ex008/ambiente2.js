let num = [1, 5, 3, 4, 8, 9]
num.push(2, 6, 7)
num.sort()
console.log(`me mostre meus vetores ${num}`)



/*Criando uma variavél para saber a posição;*/

/*Aqui é para ver se a posição vai ser menor ou igual ao número com o comprimento;*/

/*Enquanto o número for menor que a posição vai somando +1 o elemento;*/
for(let pos=0; pos <= num.length ; pos++) {
    console.log(`Meus vetores são ${num[pos]}`)
}