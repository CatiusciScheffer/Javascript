

verificar.addEventListener('click', calcular)

function calcular() {
    var txtvelocidade = document.getElementById('txtvel')
    var verificar = document.getElementById('verificar')
    var vel = Number(txtvelocidade.value)
    var res = document.getElementById('res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h.</p>`;
    
    if (vel > 60){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>`
    }

    res.innerHTML += `Dirija sempre com cinto de segurança!`
}

//foi neceessário colocar o += porque se não a mensagem anterior do inner é apagado, aparecendo apenas a última mensagem;