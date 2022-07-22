// SOMAR TODOS OS ITEMS DE UM ARRAY

function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current; 
    });
};

const valores = [100, 50, 25];

console.log('Valores sem utilizar Reduce:', valores);
console.log('Soma de todos os items da lista com Reduce:', somaNumeros(valores));

//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const saldoDisponivel = 500;

const listaEnviada = [15.9, 17, 36.56, 45, 100];

function totalListaEnviada(saldoDisponivel,arr) {
    return arr.reduce(function (prev, current, index) {
        console.log('rodada', index ++);
        console.log('saldo', {prev});
        console.log('-', {current});
        return prev - current; 
    }, saldoDisponivel); // valor de início
};

console.log('SALDO FINAL R$', totalListaEnviada(saldoDisponivel, listaEnviada));


//Com outro Array

const saldoDisp = 100;

const listaEnv = [
    {
    name: 'sabão em pó',
    preco: 30
    },
    {
        name: 'amaciante',
        preco: 12
    },
    {
        name: 'shampoo',
        preco: 8.99
    },
];

function totalListaEnv(saldoDisp,arr) {
    return arr.reduce(function (prev, current, index) {
        console.log('rodada', index ++);
        console.log('saldo', {prev});
        console.log('-', {current});
        return prev - current.preco; 
    }, saldoDisp); // valor de início
};

console.log('SALDO FINAL***R$', totalListaEnv(saldoDisp, listaEnv));