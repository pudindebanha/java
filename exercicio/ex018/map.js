const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
cursos.map((el, i) => { // el = Valor e i = posição
    console.log('Curso: ' + el + ' na posição: ' + i)
})
// Saída:
// Curso: HTML na posição: 0
// Curso: CSS na posição: 1
// Curso: JavaScript na posição: 2
// Curso: PHP na posição: 3
// Curso: React na posição: 4

const converterInt=(e) => parseInt(e)
const dobrar=(e) => e*2
let num = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)