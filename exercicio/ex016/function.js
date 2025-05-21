// criar uma a função:
function nome(){
    console.log("Micael")
}

nome() // vai mostrar o console.log que está na function


// calcular uma soma com função parametizada:
function soma(n1=0, n2=0){
    console.log(n1 * n2)  // vai multiplicar os valores de soma
}
soma(10, 2) // vai colocar esses numeros em n1 e n2, n1 = 10 e n2 = 2


// ou podemos usar return tambem:
const valor_padrao = 0
function soma(n1=valor_padrao, n2=0){ // o n1 e n2 pode receber tanto o valor padrão como o 0
    let res
    res = n1 * n2 // vai multiplicar os valores de soma
    return res  // retorna o valor de res que no caso vai ser n1 * n2
}

let resultado_soma = soma(10,3) // vai colocar esses numeros em n1 e n2, n1 = 10 e n2 = 3
console.log(resultado_soma)