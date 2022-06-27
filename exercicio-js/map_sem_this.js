function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2; 
    });
};

const nums = [5, 6, 8, 9, 11, 13, 57, 44, 55, 84, 51, 93, 113, 500, 2, 0];

console.log('Lista sem Map', nums);
console.log('Lista com Map', mapSemThis(nums));