//a = window.alert('Olá')

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nascimento = window.document.getElementById('txtano')
    if (ano_nascimento.value > ano || ano_nascimento.value.length == 0 || ano_nascimento.value < (ano - 120)){
        window.alert('[ERRO] Valor inválido, tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')//[0] é masculino e [1] feminino
        var idade = ano - Number(ano_nascimento.value)
        var genero = ''
        img = document.createElement('img')//criando tag img pelo js no lugar de fazer no html
        img.style.width = '250px'
        if (fsex[0].checked){//se o sexo masculino estiver marcado
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                genero = 'Menino'
                img.setAttribute('src', '../img/criancamenino.jpeg')
            }else if(idade < 16){
                genero = 'um Adolescente'
                img.setAttribute('src', '../img/adolesmenino.jpeg')
            }else if(idade < 30){
                img.setAttribute('src', '../img/20menino.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', '../img/40homem.jpeg')
            }else if(idade < 70){
                img.setAttribute('src', '../img/60homem.jpeg')
            }else if(idade < 120){
                img.setAttribute('src', '../img/80homem.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                genero = 'Menina'
                img.setAttribute('src', '../img/criancamenina.jpeg')
            }else if(idade < 16){
                genero = 'uma Adolescente'
                img.setAttribute('src', '../img/adolmulher.jpeg')
            }else if(idade < 30){
                img.setAttribute('src', '../img/20mulher.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', '../img/40mulher.jpeg')
            }else if(idade < 70){
                img.setAttribute('src', '../img/60mulher.jpeg')
            }else if(idade < 120){
                img.setAttribute('src', '../img/80mulher.jpg')
            }
        }
            
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}


/**
 * pegar o ano digitado
 * verificar se é maior do que o ano atual ser for apresentar alert erro com res
 * 
 * 
 */