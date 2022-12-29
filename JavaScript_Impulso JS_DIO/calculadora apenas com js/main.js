function novaOperacao(){
    let opcaoRepetir = Number(prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não'))
    switch (opcaoRepetir) {
        case 1:
            calculadora();
            break;
        case 2:
            alert('Até logo.')
    }
}

function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Resto da Divisão (%)\n 6 - Potenciação (**)'));
    
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida!\n Digite uma opção válida.')
        
        novaOperacao()

    }else{
        
        let primeiroValor = Number(prompt('Insira o primeiro valor:'));
        let segundoValor = Number(prompt('Insira o segundo valor'));
        let resultado;
        
        function soma() {
            resultado = primeiroValor + segundoValor;
            alert(`A soma ${primeiroValor} + ${segundoValor} = ${resultado}`)
            novaOperacao()
        }
        
        function subtracao() {
            resultado = primeiroValor - segundoValor;
            alert(`A subtração ${primeiroValor} - ${segundoValor} = ${resultado}`);
            novaOperacao()
        }
        
        function multiplicacao() {
            resultado = primeiroValor * segundoValor;
            alert(`A multiplicação ${primeiroValor} x ${segundoValor} = ${resultado}`);
            novaOperacao()
        }
        
        function divisao() {
            resultado = primeiroValor / segundoValor;
            alert(`A divisão ${primeiroValor} / ${segundoValor} = ${resultado}`);
            novaOperacao()
        }
        
        function restoDivisao() {
            resultado = primeiroValor % segundoValor;
            alert(`O resto da divisão entre o número ${primeiroValor} e o número ${segundoValor} é ${resultado}`);
            novaOperacao()
        }
        
        function potenciacao() {
            resultado = primeiroValor ** segundoValor;
            alert(`O número ${primeiroValor} elevado a ${segundoValor}ª potência é ${resultado}`);
            novaOperacao()
        }
    }
    
    switch (operacao) {
        case 1:
        soma();
        break;
        case 2:
        subtracao();
        break;
        case 3:
        multiplicacao();
        break;
        case 4:
        divisao();
        break;
        case 5:
        restoDivisao();
        break;
        case 6:
        potenciacao();
        break;
    }
    
};

calculadora();
