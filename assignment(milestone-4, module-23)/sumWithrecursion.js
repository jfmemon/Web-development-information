// summation using recursion ( 1 to 5 )
function summation (number) {
    console.log(number);
    if (number == 1){
        return 1;
    }
    return number + summation (--number);
}

const result = summation (5);
console.log(result);