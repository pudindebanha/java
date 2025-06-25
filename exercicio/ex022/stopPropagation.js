const caixa1 = document.getElementById("caixa1")
const btn_c1 = [...document.querySelectorAll(".c1")]


caixa1.addEventListener("click", (evt) => {
    console.log("clicou")
    console.log(evt)
})

btn_c1.map((el) => {
    el.addEventListener("click", (evt) => {
    evt.stopPropagation()
    })
   
})

//JAVASCRIPT
document.getElementById("pai").addEventListener("click", () => {
  console.log("Clicou no PAI");
});

document.getElementById("filho").addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o clique chegue no pai
  console.log("Clicou no FILHO");
});
