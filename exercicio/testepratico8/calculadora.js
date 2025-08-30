//Teste com chatgpt

const res = document.getElementById("resultado")
const btn_soma = document.getElementById("btn_soma")
const btn_sub = document.getElementById("btn_sub")
const btn_multi = document.getElementById("btn_multi")
const btn_divisao = document.getElementById("btn_divisao")


function obterValues() {
    return [
        Number(document.getElementById("input1").value), 
        Number(document.getElementById("input2").value)
    ]
}

const op = [
    () => {
        const [a, b] = obterValues();
        res.textContent = a + b
    },
    () => {
        const [a, b] = obterValues();
        res.textContent = a - b
    },
    () => {
        const [a, b] = obterValues();
        res.textContent = a * b
    },
    () => {
        const [a, b] = obterValues();
        res.textContent = a / b
    }
]


btn_soma.addEventListener("click", op[0])
btn_sub.addEventListener("click", op[1])
btn_multi.addEventListener("click", op[2])
btn_divisao.addEventListener("click", op[3])

