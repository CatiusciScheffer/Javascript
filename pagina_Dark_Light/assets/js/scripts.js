// 5 - criar uma função que receba estas outras duas, a mesma chamada no addEventListener
function changeMode(){
    changeClass();
    changeText();
    
}

// 2 - criar uma função que coloque classe em todas as tags do html(body, h1, button e o footer), no exemplo foi colocado nome da classe diferente do que foi usado no css;
function changeClass() {
    button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

// 4 - criar uma função para modar o texto do h1, com duas constantes uma para dark e outra para light, com uma condição 
function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

// 3 - criar constante com nome da classe criada na função acima, recebendo o nome da classe definida no css
const darkModeClass = 'dark-mode';
// 1 - criar uma constante para selecionar cada elemento: body, h1, button e footer
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)


