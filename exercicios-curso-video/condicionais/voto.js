idade = 25

console.log(`Sua idade é ${idade} anos, então sua situação é:`)
//menor de 16 "NÃO VOTA"
// ENTRE 16 até 18 && MAIORES DE 65 "VOTO OPCIONAL" 
// DOS 18 AOS 65 "VOTO OBRIGATÓRIO"

if (idade < 16){
    console.log('NÃO VOTA')
}else if(idade >=18 && idade <= 65){
    console.log('VOTO OBRIGATÓRIO')
}else{
    console.log('VOTO OPCIONAL')
}


