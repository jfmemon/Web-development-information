// array
var number = [2, 4, 23, 53, 32, 64, 31];
console.log(number);

// checking index number
// var result = number.indexOf(34);
var result = number.indexOf(32);
console.log(result);

// which index is carried which value of an array
var thirdIndexCarry = number[3];
console.log(thirdIndexCarry);

// checking 20 is there or not
if (number.indexOf(20) == -1) {
    console.log('20 is missing here.');
}

// checking 23 is there or not
if(number.indexOf(23) != -1) {
    console.log('23 is there in array.')
} 

// loop
// while loop
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}


// function
function multiplyNumber(num1, num2){
    var multiplication = num1 * num2;
    return multiplication;
}

var result = multiplyNumber(5, 5);
console.log(result);


// object
var tissue = {
    color: 'white',
    price: 20,
    brand: 'hakkani',
}
console.log(tissue);
var tissueBrand = tissue.brand;
console.log(tissueBrand);