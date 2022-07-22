/*Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
Crie seus próprios objetos para esta atividade!*/
const cliente = {
        nome: 'José',
        idade: 45,
}

const funcionario = {
        nome: 'Cleid',
        idade: 22,
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(funcionario, 30));
console.log(calculaIdade.apply(funcionario, [30]));
