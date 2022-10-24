const previousDisplayText = document.querySelector("#previous-display");
const currentDisplayText = document.querySelector('#current-display')
const buttons = document.querySelectorAll('#buttons-container button')
console.log(buttons);

class Calculator{
    constructor(previousDisplayText, currentDisplayText){
        this.previousDisplayText = previousDisplayText //sempre sai na tela
        this.currentDisplayText = currentDisplayText//sempre sai na tela
        this.currentOperation = "" // valor que o usuário está digitando
    }

    //adicionando digito no display
    addDigit(digit){
        //verificando se já existe "," na operação ou se a mesma está sendo inserida novamente pelo usuário
        if(digit === "," && this.currentDisplayText.innerText.includes(",")){
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // Todas as operações da calculadora
    processOperation(operation){
        //pegar os valores digitados e o operador
        let operationValue;
        const previous = +this.previousDisplayText.innerText;
        const current = +this.currentDisplayText.innerText;

        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation,current, previous);
                break;
        
            default:
                break;
        }
    }

    // alterando os valores do display
    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        console.log(operationValue, operation, current, previous)        
        this.currentDisplayText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousDisplayText, currentDisplayText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if( +value >= 0 || value ===","){
            calc.addDigit(value);
        }else{
            calc.processOperation(value);
        }
    });
})