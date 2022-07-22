var hora_sistema = new Date()
var hora = hora_sistema.getHours() 
var minutos = hora_sistema.getMinutes()

console.log(`\nAgora são exatamente ${hora}:${minutos}hs.\n`)
if (hora < 12){
    console.log('Bom dia flor do dia!\n')
}else if (hora <= 18){
    console.log('Boa tarde!\n')
}else{
    console.log('Boa noite!\n')
}