let num = [1, 8, 7, 4, 5]
num[5] = 9//Adicionar número
num.push(2)//Adicionar número
num.sort()//Num em ordem crescente / Sempre colocar no final do código
console.log(`Mostre os resultados do vetor ${num}`)
console.log(`Quantas posições tem meu vetor ? O seu vetor tem ${num.length} posições`)//Quantidade de vetores
console.log(num[0])//Mostrar o vetor pela posição


let pos = num.indexOf(10)//Mostrar a posição do conteúdo
if (pos == -1) {
    console.log("Valor não encontrado!")
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
