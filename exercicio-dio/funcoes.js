const alunos = [
    {
        nome: 'Paulo',
        nota: 7,
        turma: '42A',
    },
    {
        nome: 'Maria',
        nota: 5,
        turma: '42A',
    },
    {
        nome: 'Carmem',
        nota: 6,
        turma: '42A',
    }
];

function alunosAprovados(alunos, media){
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++){
        if (alunos[i].nota >= media){
            aprovados.push(alunos[i].nome);
        }
    }
    return aprovados;
};

console.log('Alunos aprovados:')
console.log(alunosAprovados(alunos, 5));