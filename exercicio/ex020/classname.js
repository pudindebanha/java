const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursosEspecial = document.getElementsByClassName('c2')[4]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursosEspecial)

cursosTodos.map((el) => {
    el.classList.add("destaque")
})

