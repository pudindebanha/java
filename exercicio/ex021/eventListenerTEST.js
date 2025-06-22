const btn = document.getElementsByTagName("button")[0]
console.log(btn)

btn.addEventListener("click", (e) => {
    console.log(e)
})

btn.addEventListener("click", (e) => {
    console.log(e.target.previousElementSibling.innerText = 'Micael')
})
