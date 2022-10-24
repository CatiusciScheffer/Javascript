const previousDisplayText = document.querySelector("#previous-display");
const currentDisplayText = document.querySelector('#current-display')
const buttons = document.querySelectorAll('#buttons-container button')
const resultado = document.querySelector("#resultado")
console.log(resultado, 's');

class Calculator {
  constructor(previousDisplayText, currentDisplayText) {
    this.previousDisplayText = previousDisplayText //sempre sai na tela
    this.currentDisplayText = currentDisplayText//sempre sai na tela
    this.currentOperation = "" // valor que o usuário está digitando
  }

  //adicionando digito no display
  addDigit(digit) {
    //verificando se já existe "," na operação ou se a mesma está sendo inserida novamente pelo usuário
    if (digit === "." && this.currentDisplayText.innerText.includes(".")) {
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  // Todas as operações da calculadora
  processOperation(operation) {
    // verificando se o current está vazio, necessário para mudar a operação matemática
    if (this.currentDisplayText.innerText === "" && operation !== "CE") {
      //modificar a operação matemárica de +, - ...
      if (this.previousDisplayText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

    //pegar os valores digitados e o operador
    let operationValue;
    const previous = +this.previousDisplayText.innerText.split(" ")[0];
    const current = +this.currentDisplayText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "%":
        operationValue = previous * (current/100);
        this.updateScreen(operationValue, operation, current, previous);
        break; 
      case "x²":
        operationValue = previous * previous;
        this.updateScreen(operationValue, operation, current, previous);
        break; 
      case "DEL":
        this.processDelOperator();
        break;
      case "C":
        this.processClearCurrentOperator();
        break;
      case "CE":
        this.processClearPreviousOperator();
        break;
      case "=":
        this.processEqualOperator();
        break; 
      default:
        break;
    }
  }

  // alterando os valores do display
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      this.currentDisplayText.innerText += this.currentOperation;
    } else {
      // verificando se o valor é zero se for o valor passa a ser o current
      if (previous === 0) {
        operationValue = current;
      }

      // colocando o resultado para cima
      this.previousDisplayText.innerText = `${operationValue} ${operation}`;
      this.currentDisplayText.innerText = "";
    }
  }

  // mudando operação matemática
  changeOperation(operation){

    const mathOperations = ["*", "/", "+", "-", "%"];
    /**verificando se o usuário inseriu uma operação válida
     * caso contrário aborta a operação
     */
    if (!mathOperations.includes(operation)) {
      return;
    }
    //removendo último operador
    this.previousDisplayText.innerText = this.previousDisplayText.innerText.slice(0, -1) + operation;
  }
  //delerar o último digito inserido
  processDelOperator(){
    this.currentDisplayText.innerText = this.currentDisplayText.innerText.slice(0, -1);
  }
  //deletar valor do current
  processClearCurrentOperator(){
    this.currentDisplayText.innerText = "";
  }
  //limpa completamente o display
  processClearPreviousOperator(){
    this.currentDisplayText.innerText = "";
    this.previousDisplayText.innerText = "";
  }
  // função botão de igual
  processEqualOperator(){
    //juntando os valores do current, previous e mais o operador
    const operation = previousDisplayText.innerText.split(" ")[1];
    
    this.processOperation(operation);
    // removendo operador após apertar no igual
    this.previousDisplayText.innerText = this.previousDisplayText.innerText.slice(0, -1);
  }
  
}

const calc = new Calculator(previousDisplayText, currentDisplayText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
})