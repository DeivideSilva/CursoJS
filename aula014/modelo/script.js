function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
 
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagemmanha.png'
        document.body.style.background = '#256fac'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'imagemtarde.png'
        document.body.style.background = '#c6baa4'
    } else {
        img.src = 'imagemnoite.png'
        document.body.style.background = '#808080'
    }
}
