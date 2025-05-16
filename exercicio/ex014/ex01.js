// let num = [10,20,30,40,50]
// for  (n in num){
//     console.log(n)
// }

// for (n of num) {
//     console.log(n)
// }

//criar uma variável puxando o elemento 'div'
const objs = document.getElementsByTagName("div")

//alterar utilizando for of
for (o of objs){
    console.log(o.innerHTML="Cursos")
}
//alterar utilizando for in
for (o in objs){
    console.log(objs[o].innerHTML='Curso')
}
