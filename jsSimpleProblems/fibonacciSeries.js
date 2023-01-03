// have to print a fibonacci series like: 0, 1, 1, 2, 3, 5, 8, 13
/*
let fibo = [0, 1];
for(let i = 2; i < 50; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
*/

// have to print a fibonacci series through function
function getFibonacciSeries (num) {
    if(typeof num != 'number'){
        return console.log('Please enter any number.');
    }
    else if(num < 0){
        return console.log('Please enter any positive number.')
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacciSeries = getFibonacciSeries(50);
console.log(fibonacciSeries);