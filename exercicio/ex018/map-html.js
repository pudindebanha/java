let el = document.getElementsByTagName("div") //Pegando as DIV por DOM
el = [...el] //Transformando o el em spread
console.log(el)
el.map((e,i)=>{ //Utilizando o .map para percorrer o el e utilizando o parametro:e, valor:i
    e.innerHTML = "Micael" //Alterando as div com innerHTML
})

//

// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
// console.log(val)


