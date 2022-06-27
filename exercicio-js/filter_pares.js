function numPares(arr) {
    return arr.filter(function (item) {
        if (item % 2 == 0){
            return item;
        }; 
    });
};

const numGeral = [5, 6, 8, 9, 11, 13, 57, 44, 55, 84, 51, 93, 113, 500, 2, 0];

console.log('Array Todos os Números:', numGeral);
console.log('Filtro dos Números Pares:', numPares(numGeral));


