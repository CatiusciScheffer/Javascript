const maca = {
    value : 2,
};

const laranja = {
    value : 3,
};

const nums = [1, 5]


function mapComThis(arr, thisArg) { //cria função que recebe um array (nums)
    return arr.map(function (item) {//retorna array mapeado, criando uma arrow fuction, com um item par..
        return item * this.value;   //esse this vou usar tanto para maça quanto para laranja
    }, thisArg)
};

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));