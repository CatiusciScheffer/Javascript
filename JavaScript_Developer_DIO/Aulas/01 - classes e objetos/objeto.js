
// Criando objeto
const pessoa = {
    nome: 'Catiusci',
    idade: 25,
    altura: 1.56,
};
console.log(pessoa);
//{nome: 'Catiusci', idade: 25, altura: 1.56}

pessoa.nome = 'July'
console.log(pessoa);
//{nome: 'July', idade: 25, altura: 1.56}

delete pessoa.altura;
console.log(pessoa);
//{nome: 'July', idade: 25}


//Objeto com Método
const pessoa1 = {
    nome: 'Maria',
    idade: 25,
    altura: 1.56,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};
// o "this" assume todos os valores do objeto ao qual ele pertence;
pessoa1.descrever();

console.log(pessoa1.nome);
console.log(pessoa1['nome']);

