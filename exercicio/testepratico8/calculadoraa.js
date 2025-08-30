const res = document.getElementById("resultado")
const btn_soma = document.getElementById("btn_soma")
const btn_sub = document.getElementById("btn_sub")
const btn_multi = document.getElementById("btn_multi")
const btn_divisao = document.getElementById("btn_divisao")


const operacao = obterValues => { //Cria uma função simplificada para retorna o valor do input em numero
    return [ //Aqui é necessario um retorno para pegar os valores em numero
        Number(document.getElementById("input1").value), //Aqui ja pega o input transformado em Number e .value
        Number(document.getElementById("input2").value)
    ]
}

const op = [ // Cria um array de op
    
    //op[0]
    ()=>{ //Cria uma arrow function
        const [a, b] = operacao() //Cria uma nova variavel com 2 valores (a,b). E faça com que elas receba a função (operacao) criada acima e transformando o valor (a, b) no input da função variavel
        res.textContent = a + b //mostra o resultado com os valores A e B, que no caso agora são o input que o cliente colocar
    },

    //op[1]
    ()=>{
        const [a, b] = operacao()
        res.textContent = a - b
    },

    //op[2]
    ()=>{
        const [a, b] = operacao()
        res.textContent = a * b
    },

    //op[3]
    ()=>{
        const [a, b] = operacao()
        res.textContent = a / b
    }
]

btn_soma.addEventListener("click", op[0])//Cria um Evento de click chamando a op 0
btn_sub.addEventListener("click", op[1])//Cria um Evento de click chamando a op 1
btn_multi.addEventListener("click", op[2])//Cria um Evento de click chamando a op 2
btn_divisao.addEventListener("click", op[3])//Cria um Evento de click chamando a op 3
