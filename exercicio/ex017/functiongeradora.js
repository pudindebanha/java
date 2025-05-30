function* cor(){
    yield 'Vermelho'
    yield 'Azul'
    yield 'Verde'
}
const itc = cor()
console.log(itc.next().value) // Saída 1: Vermelho
console.log(itc.next().value) // Saída 2: Azul
console.log(itc.next().value) // Saída 3: Verde
//

function* letras() {
  yield 'A';
  yield 'B';
  yield 'C';
}
for (let letra of letras()) {
  console.log(letra); // Saída: A, B, C
}

//
function* contadorInfinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const c = contadorInfinito();
console.log(c.next().value); // 0
console.log(c.next().value); // 1
console.log(c.next().value); // 2