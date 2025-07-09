const idadesMaior =(valor,indice,array)=> { //Não é obrigatorio trabalhar com os 3 valores ao mesmo tempo
    if(valor >= 18) //Compara se o valor é maior ou igual a 18
        return valor //Retorna o valor se é verdadeiro ou falso
}
const idades = [10,14,12,21,45,23]//Cria um array
const maior = idades.filter(idadesMaior) //Utiliza o function criada dentro do filter
console.log(idades)
console.log(maior)


//Para simplificar basta criar uma ArrowFunction dentro do filter

const velocidade = [60,50,40,70,85]//Cria um array
const radar = velocidade.filter((valor,indice,array)=>{ //Criar uma ArrowFunction dentro do filter para simplificar
    if(valor >= 55) //Compara se o valor é maior ou igual a 55
        return valor //Retorna o valor se é verdadeiro ou falso
})
console.log(velocidade)
console.log(radar)

