function mostrar(){
    var inicio = window.document.getElementById('numinicio')
    var fim = window.document.getElementById('numfim')
    var passo = window.document.getElementById('numpasso')
    var resposta = window.document.getElementById('resposta')
    var s = ''
    var a_inicio = Number(inicio.value)
    var b_fim = Number(fim.value)
    var p_passo = Number(passo.value)
    if(a_inicio == 0 || b_fim == 0 || p_passo == 0){
        window.alert('Valor ZERO/VAZIO não é permitido')
    }else if(a_inicio > b_fim){
        while (a_inicio > b_fim) {
            console.log(a_inicio)
            resposta.innerHTML += `${a_inicio}&#128073`
            s = a_inicio - p_passo
            a_inicio = s
        }
    }else{
        while (a_inicio < b_fim) {
            console.log(a_inicio)
            resposta.innerHTML += `${a_inicio}&#128073`
            s = a_inicio + p_passo
            a_inicio = s
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}
