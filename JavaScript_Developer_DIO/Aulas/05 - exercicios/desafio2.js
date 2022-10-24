/**
 * 2) FAÇA UM PROGRAMA QUE RECEBA N (QUANTIDADE DE NÚMEROS) E SEUS RESPECTIVOS VALORES.
 * IMPRIMA O MAIOR NÚMERO PAR E O MENOR NÚMERO IMPAR
 */


const { gets, print } = require('./desafio2_func_aux');

const n = gets();

let maiorNumPar = 0;
let menorNumImpar = 0;

for (let i = 0; i < n; i++) {
    
    const numero = gets();

    if(numero % 2 === 0 && numero > maiorNumPar){
            maiorNumPar = numero;
    }else{
        if(menorNumImpar === 0 || menorNumImpar < numero){
            menorNumImpar = numero;
        }
    }
    
}

console.log(`MAIOR NÚMERO PAR: ${maiorNumPar}`)
console.log(`MENOR NÚMERO ÍMPAR: ${menorNumImpar}`);