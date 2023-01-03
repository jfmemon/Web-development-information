// largest value between two number
// let a = 5;
// let b = 4;
// if(a > b){
//     console.log('a is the maximum.');
// }else{
//     console.log('b is the maximum.');
// }


// largest value between tree number
function largestValue(num1, num2, num3) {
    console.log(num1, num2, num3);
    if (num1 > num2 && num1 > num3) {
        console.log('First number is the largest value here.');
    } else if(num2 > num1 && num2 > num3) {
        console.log('Second number is the largest value here.');
    } else{
        console.log('Third number is the largest value here.');
    }
}

largestValue(10, 5, 50);
