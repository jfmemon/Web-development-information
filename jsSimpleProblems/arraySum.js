// let number = [5, 3, 1, 4, 6];
// console.log('Value of the array are: ' + number);
// let numberLength = number.length;
// console.log('The length of this array is: ' + numberLength);
// let add = 0;
// for (let i = 0; i < number.length; i++) {
//     add = add + number[i];
// }
// console.log('The sum of these value is: ' + add);


// arraySum by using function
function arraySum (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

const summation = arraySum([10, 12, 14]);
console.log(summation);