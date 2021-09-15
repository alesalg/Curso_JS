function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `<p>Bom dia, agora são ${hora} horas</p>`
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#ecd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `<p>Boa tarde, agora são ${hora} horas</p>`
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `<p>Boa noite, agora são ${hora} horas</p>`
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}


