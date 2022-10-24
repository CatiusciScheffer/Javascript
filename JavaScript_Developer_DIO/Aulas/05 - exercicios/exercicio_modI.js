/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
 */

let nota1 = 7;
let nota2 = 7;
let nota3 = 6.9;

let mediaAluno = (nota1 + nota2 + nota3) / 3;

if(mediaAluno < 5){
    console.log('Classificação do Aluno: REPROVADO');
}else if (mediaAluno < 7){
    console.log('Classificação do Aluno: EM RECUPERAÇÃO');
}else{
    console.log('Classificação do Aluno: APROVADO');
}

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

let pesoKg = 100;
let alturaMt = 1.57;

//let calculoIMC = pesoKg / (alturaMt * alturaMt);
let calculoIMC = pesoKg / Math.pow(alturaMt, 2);

if (calculoIMC < 18.5){
    console.log('IMC: Abaixo do Peso')
}else if (calculoIMC < 25){
    console.log('IMC: Peso Normal')
}else if(calculoIMC < 30){
    console.log('IMC: Acima do Peso')
}else if(calculoIMC < 40){
    console.log('IMC: Obeso')
}else{
    console.log('IMC: Obesidade Grave')
};

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 59.60;
let desconto10 = (precoEtiqueta * 0.90);
let desconto15 = (precoEtiqueta * 0.85);
let parcelamentoMais2x = (precoEtiqueta * 1.10);

const formasPagto = ['Débito', 'Dinheiro/Pix', 'Parcelado em até 2X', 'Parcelamento 3X ou +'];
let pagamento = 'Parcelamento 3X ou +';
let totalPagar;

if(pagamento === formasPagto[0]){
    totalPagar = desconto10;
    console.log(`Forma de pagamento escolhida foi:`, pagamento, '\nTotal a Pagar:', totalPagar)
}else if(pagamento === formasPagto[1]){
    totalPagar = desconto15;
    console.log(`Forma de pagamento escolhida foi:`, pagamento, '\nTotal a Pagar:', totalPagar)
}else if(pagamento === formasPagto[2]){
    totalPagar = precoEtiqueta;
    console.log(`Forma de pagamento escolhida foi:`, pagamento, '\nTotal a Pagar:', totalPagar)
}else{
    totalPagar = parcelamentoMais2x;
    console.log(`Forma de pagamento escolhida foi:`, pagamento, '\nTotal a Pagar:', totalPagar)
};
