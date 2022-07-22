// Minha humilde solução kkk

const lista = ['coco', 'arroz', 'feijão', 5, 10, 'mamá'];

function debugError (arr, num){
    if (arr.length != num){
        return 'Tamanho da lista não atende aos critérios'
    };
    return 'Lista ok'
};

console.log(debugError(lista, 6));

/*EXERCÍCIO COMPLETO
Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

    Crie uma função que recebe um array e um número
    Realize as seguintes validações
        Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        Se o array não for do tipo 'object', lance um erro do tipo TypeError
        Se o número não for do tipo 'number', lance um erro do tipo TypeError
        Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    Utilize a declaração try...catch
    Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

*/
function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}
}

console.log(validaArrays(lista, 4));