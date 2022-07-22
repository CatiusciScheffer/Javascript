const div_area = window.document.getElementById('area')
div_area.addEventListener('click', clicar)
div_area.addEventListener('mouseenter', entrar)
div_area.addEventListener('mouseout', sair)

function clicar() {
    div_area.innerText = 'Clicou!'
    div_area.style.background = 'yellow'
    div_area.style.color = 'Red'
}

function entrar() {
    div_area.innerText = 'Entrou!'
    div_area.style.background = 'orange'
    div_area.style.color = 'white'
}

function sair() {
    div_area.innerText = 'Saiu!'
    div_area.style.background = 'greenyellow'
    div_area.style.color = 'crimson'
}