
/*Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
 */

const medias = require('./desafio1_func_aux');

let mediaAluno = medias.gets();

if(mediaAluno < 5){
    console.log('Classificação do Aluno: REPROVADO');
}else if (mediaAluno < 7){
    console.log('Classificação do Aluno: EM RECUPERAÇÃO');
}else{
    console.log('Classificação do Aluno: APROVADO');
}