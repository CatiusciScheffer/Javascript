/*2) Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function calculoIMC(pesoKg, alturaMt) {
    return pesoKg / Math.pow(alturaMt, 2);
}

function classificarIMC(imc) {
    if (imc < 18.5){
        return('IMC: Abaixo do Peso');
    }else if (imc < 25){
        return('IMC: Peso Normal');
    }else if(imc < 30){
        return('IMC: Acima do Peso');
    }else if(imc < 40){
        return('IMC: Obeso')
    }else{
        return('IMC: Obesidade Grave');
    }
}

(function () {
    pesoKg = 65
    alturaMt = 1.57
    const imc = calculoIMC(pesoKg, alturaMt);
    console.log(classificarIMC(imc));
})();


/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 59.60;
let percentual;

const formasPagto = ['Débito', 'Dinheiro/Pix', 'Parcelado em até 2X', 'Parcelamento 3X ou +'];

let pagamento = 'Débito';

function calcularTotal() {
    if (pagamento === formasPagto[0]){
        percentual = 0.90    
    }else if(pagamento === formasPagto[1]){
        percentual = 0.85
    }else if(pagamento === formasPagto[2]){
        percentual = 1
    }else{
        percentual = 1.10
    }    
    return precoEtiqueta * percentual;
}

console.log(`Forma de pagamento escolhida foi:`, pagamento, '\nTotal a Pagar:', calcularTotal());

