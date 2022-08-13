function tabuada() {
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let tab = document.getElementById('seltab')
    tab.innerHTML = ''//limpar a consulta anterior

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else {
        for(let c = 0; c <= 10; c++){
            let item = document.createElement('option')//criar este option como se tivesse sido criado no HTML
            item.text = `${n} x ${c} = ${n*c}`//Insere o texto no objeto criado acima
            item.value = `tab${c}`//dá valor para o objeto criado para uso no php
            tab.appendChild(item)//coloca o item dentro do select
        }
    }
}