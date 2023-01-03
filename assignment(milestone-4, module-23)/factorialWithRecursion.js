// factorial with recursion
function factorial (number) {
    console.log(number);
    if(number == 1) {
        return 1;
    }
    return number * factorial(--number);
}
const result = factorial (5);
console.log(result);