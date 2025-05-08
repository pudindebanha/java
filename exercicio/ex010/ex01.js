let amigo = {nome: 'Jose',
sexo: 'M',
peso: 85.4,
altura: 1.73,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
    
}
}

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso} e mede ${amigo.altura}`)
