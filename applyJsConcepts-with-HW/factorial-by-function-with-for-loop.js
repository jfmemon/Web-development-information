// Getting the value of any factorial
function factorial (number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
const result = factorial(5);
console.log('The factorial of 5 = ' + result);

let shihabNumber = 10;
const shihabResult = factorial(shihabNumber);
console.log('The factorial of 10 = ' + shihabResult);