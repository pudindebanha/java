let n = 0
let max = 1000
let pares = 0

for (let i=n; i<max; i++){
    if(i%2 != 0){
        continue
    }
    pares++
}
console.log(`Quantidade de pares ${pares}`)


for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // pula os números pares
  }
  console.log(`Números impares ${i}`);
}