// repetição com função
function nome() {
  return 'Micael';
}

for (let i = 0; i < 10; i++) {
  console.log(nome());
}

// alterar texto em html
function mudarTexto(){
    let d1 = document.getElementsByClassName('d1')
    let d2 = document.getElementsByClassName('d2')
    let d3 = document.getElementsByClassName('d3')
        d1.innerHTML = "Micael"
        d2.innerHTML = "Cursos"
        d3.innerHTML = "JS"
}