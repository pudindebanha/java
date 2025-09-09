class Carro{
    principal = "G-Wagon"
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.ptipo = 'Esportivo'
            this.velmax = 300
        } else if(ptipo == 2){
            this.ptipo = 'Sedan'
            this.velmax = 160
        } else if(ptipo == 3){
            this.ptipo = 'SUV'
            this.velmax = 130
        } else {
            this.ptipo = 'Militar'
            this.velmax = 250
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.ptipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.ptipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.ptipo}`)
        console.log(`Velocidade.: ${this.velmax}`)
        console.log(`Meu carro.: ${this.principal}`)
        console.log("------------------")
    }
}

let c1 = new Carro("Porshe", 1)
let c2 = new Carro("Mercedes", 2)
let c3 = new Carro("RAM", 3)
let c4 = new Carro("Corsa", 4)

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)
console.log(c4.ptipo)
console.log(c4.nome)
console.log(c4.velmax)

c1.info()
c2.info()
c3.info()
c4.info()

//c1.setNome("Macan")

console.log(c1.getVelMax())
console.log(c1.getNome())
console.log(c1.getTipo())

console.log(c1.getInfo())
console.log(c1.getInfo()[0])