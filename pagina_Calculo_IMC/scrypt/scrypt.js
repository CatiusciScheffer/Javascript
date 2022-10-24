
const calcular = document.getElementById('calcular');

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do normal';
        }else if(valorIMC < 25){
            classificacao = 'normal';
        }else if(valorIMC < 30){
            classificacao = 'peso em excesso';
        }else if(valorIMC < 35){
            classificacao = 'obesidade I';
        }else if(valorIMC <=40){
            classificacao = 'obesidade II';
        }else{
            classificacao = 'obesidade III';
        }

        resultado.textContent = `${nome}`;

        resultado.textContent += `IMC: ${valorIMC}`;

        resultado.textContent += `${classificacao}`;

    }else{
        resultado.textContent = `Preencha todos os campos`;
    }
}

calcular.addEventListener('click', calcularIMC);
