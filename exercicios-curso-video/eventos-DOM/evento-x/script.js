var btn_soma = window.document.getElementById('btn-soma')

btn_soma.addEventListener('click', somar)
btn_soma.value = 'Calcular'

function somar() {
    var input_n1 = window.document.getElementById('txt1')
    var input_n2 = window.document.getElementById('txt2')
    var div_res = window.document.getElementById('res')
    var n1 = Number(input_n1.value)
    var n2 = Number(input_n2.value)
    var soma = n1 + n2
    btn_soma.value = 'Total Calculado'
    div_res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`
    
}
