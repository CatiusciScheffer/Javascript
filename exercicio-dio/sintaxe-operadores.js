
let num1 = 5;
let num2 = 3;

function comparar(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2){
        saoIguais = 'não';
    }
    
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function entre10e20(num1, num2){
    const soma = num1 + num2;
    const comparar10 = soma > 10;
    const comparar20 = soma > 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (comparar10){
        resultado10 = 'maior'
    };
    
    if (comparar20){
        resultado20 = 'maior'
    };

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
};



function chamarFuncao(){
    if (!num1 || !num2) return console.log('Informe dois valores.');
    return console.log(comparar(num1, num2), entre10e20(num1, num2));
};

chamarFuncao();
