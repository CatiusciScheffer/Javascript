const N = [3,2,1,4];
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = N;

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }else{
    if(menorNumeroImpar > numero){
      menorNumeroImpar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}
       
// TODO: Imprima as saídas conforme o enunciado deste desafio.
console.log(`Maior número par: ${maiorNumeroPar}`);
console.log(`Menor número ímpar: ${menorNumeroImpar}`);