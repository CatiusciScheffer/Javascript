/*
const notas = [];

notas.push(8);
notas.push(6);
notas.push(7.4);
notas.push(4);

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma/notas.length;
console.log(media);

//1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = `, i * numero);
}

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < listaNumeros.length; i++) {
    
    if (listaNumeros[i] % 2 === 0){
        console.log(`Número par ${listaNumeros[i]}`);
    }
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const listaNomes = ['ANA', 'VALERIA', 'JOÃO', 'VITOR', 'LENIRA', 'VANDA'];

for (let i = 0; i < listaNomes.length; i++) {
    const element = listaNomes[i];
    if(listaNomes[i][0] === 'V'){
        console.log(element);
    }    
}

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

let numerosPares10_50 = [];

for (let i = 10; i <= 50; i++) {
    if(i % 2 === 0){
        numerosPares10_50.push(i);
    }
}
console.log(numerosPares10_50);
*/

/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

   const listaMedias = [2, 7, 3, 8, 10, 4]

   for (let i = 0; i < listaMedias.length; i++) {
        const medialist = listaMedias[i];
            if(medialist < 5){
                console.log(medialist);
            }
   }


/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

    const listaMedias1 = [5, 4.5, 8, 6, 7, 7.49, 9, 9.9, 2];
    var max = Math.max(...listaMedias1);
    console.log(max)
