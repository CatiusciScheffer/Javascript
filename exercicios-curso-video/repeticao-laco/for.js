/*console.log('Vai começar...')
for(c = 0; c <= 4; c++) {
    console.log(c)
}
console.log('FIM!')
*/


let par = [0, 2, 4, 6]
let impar = ['a', 'b', 'c', 'd']
let union = []

for (let pos = 0; pos < par.length; pos++) {
    par.sort()
    impar.sort()
    union.push(par[pos])
    union.push(impar[pos])   
}
console.log(`${union}`)

console.log(par.indexOf(2))//procuro o 'valor', tenho a posição como retorno, se não encontrar retorna com -1

