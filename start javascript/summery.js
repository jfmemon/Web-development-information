var phones = ['iphone', 'xiaomi', 'samsung', 'sony', 'htc', 'realme', 'oppo'];
var thirdIndex = phones[3] = 'Oneplus';
console.log(phones);
// console.log(thirdIndex + ' is the value of 3rd index.');

if (phones.indexOf('oppo') == -1) {
    console.log('Oppo is missing in this array.');
}else{
    console.log('Oppo is located in this array.');
}

if (phones.indexOf('htc') == -1) {
    console.log('htc is not found in this array.');
}else{
    console.log('htc is located here.');
}


// loop
// while loop
var i = 0;
while(i < 20){
    console.log(i);
    i++;
}

// // for loop 
for (var num = 1; num < 20; num++){
    console.log(num);
}


// function

function addNumbers (num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}

var result = addNumbers(10, 20, 30);
console.log(result);


// object 
var microPhone = {
    color:'white',
    price: 200,
    brand:'apple',
    type:'wired'
}
console.log(microPhone);
var micColor = microPhone.color;
console.log(micColor);

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   console.log(result);