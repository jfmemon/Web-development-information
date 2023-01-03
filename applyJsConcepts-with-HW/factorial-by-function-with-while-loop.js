// Getting the factorial value with while loop in function
/*
function getFactorial (number) {
    let factorial = 1;
    let i = 1;
    while(i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const result = getFactorial(5);
console.log(result);
*/

// Getting the factorial value with while loop in function with decrement
function gettingFactorial (number) {
    let fact = 1;
    let i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
const result = gettingFactorial(6);
console.log(result);

