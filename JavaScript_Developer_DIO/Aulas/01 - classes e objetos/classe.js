
/*class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

function comparaIdade(p1,p2) {
    if(p1.idade < p2.idade){
        console.log(`${p2.nome} é ${p2.idade - p1.idade} anos mais velho(a) que ${p1.nome}.`)
    }else if (p1.idade > p2.idade){
        console.log(`${p1.nome} é ${p1.idade - p2.idade} anos mais velho(a) que ${p2.nome}.`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`)
    }
}

const josefa = new Pessoa('Josefa Maria Almeira', 25);
const cleide = new Pessoa('Cleide Fátima da Silva', 25);

comparaIdade(josefa, cleide)*/



/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro{
    marca;
    cor;
    rendPorKM;

    constructor(marca, cor, rendPorKM){
        this.cor = cor;
        this.marca = marca;
        this.rendPorKM = rendPorKM;
    }

    metodo(distanciaKM, precoCombstivel){
        const custoTotal = (distanciaKM / this.rendPorKM * precoCombstivel);
        console.log(`O custo da viagem será de R$ ${custoTotal.toFixed(2)}`);
    }
}


const peugeot208 = new Carro('peugeot', 'vermelho', 13);
peugeot208.metodo(1420, 7.50);

/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso / Math.pow(this.altura, this.altura)).toFixed(2);
    }

    classificarIMC(){
        const imc = this.calcularIMC;
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
}

const jose = new Pessoa('José', 90, 1.75);
console.log(jose.calcularIMC());
console.log(jose.classificarIMC());

