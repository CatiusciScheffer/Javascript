
function carregar() {
    var mensagem = document.getElementById('msg')
    var data = new Date()
    hora = data.getHours()
    minuto = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}:${minuto} hs.<br>`
    
    var imagem = document.getElementById('imagem')

    if (hora >= 0 && hora <= 12){
        imagem.src = './manha.png'
        mensagem.innerHTML += `<strong>Bom dia</strong>`
        document.body.style.background = '#96a9b2'
    }else if (hora > 12 && hora <=18){
        imagem.src = './tarde.png'
        mensagem.innerHTML += `<strong>Boa tarde</>!`
        document.body.style.background = '#5d969b'
    }else{
        imagem.src = './noite.png'
        mensagem.innerHTML += `<strong>Boa Noite!</>`
        document.body.style.background = '#15333c'
    }
}




