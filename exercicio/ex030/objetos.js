//CONSTRUCTOR E VARIAVEL SEM PARAMETRO
class Pessoas { //Cria uma class com o valor Pessoas
    constructor() { //Na class podemos passar sem parametro, mas ao criar uma variavel nao deve ter nenhum parametro
        this.nome = "Micael"
    }
}

let p1 = new Pessoas()//Cria uma VARIAVEL para instasiar um novo objeto, resumindo cria uma memoria com os valores acima.

console.log(p1.nome) //Resultado: Micael



//CONSTRUCTOR E VARIAVEL COM PARAMETRO
class Familia { //Cria uma class com o valor Familia
    constructor(pnome) { //Na class passa o parametro PNOME que deve ser o mesmo na nova VARIAVEL que eu criar
        this.nome = pnome
    }
}

let p2 = new Familia("Pai") //Cria uma VARIAVEL e inseri os valores que vai ser no parametro do this.nome = PNOME, resumindo cria uma memoria com os valores acima passando o valor "Pai" no parametro PNOME.
let p3 = new Familia("Mae")
let p4 = new Familia(10)

console.log(p2.nome)
console.log(p3.nome)
console.log(p4.nome)