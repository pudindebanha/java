function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        msg2.innerHTML = 'Bom dia'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#8d540b'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        msg2.innerHTML = 'Boa tarde'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b0d1e7'
    } else {
        //Boa noite
        msg2.innerHTML = 'Boa noite'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#525252'
    }
}