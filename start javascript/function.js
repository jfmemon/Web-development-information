// function declaration
function fanOn () {
    console.log('get up &');
    console.log('on the fan');
}

// call the function
// fanOn();


// another example
function sleep(name, time) {
    console.log(name + " is sleeping from " + time);
}

// sleep('Rahim', '10 pm.');
// sleep('Karim', '11 pm.');
// sleep('Mahim', '12 pm.');


// another example 
function bringChips (taka) {
    console.log('Given '+ taka +' taka.');
    console.log('Mama, chips dan.');
    var chipsPrice = 10;
    var chipsQuantity = taka / chipsPrice;
    return chipsQuantity;
}

// var chips = bringChips(200);
// console.log('Ei nan '+chips+' chips.')

// adding 2 number
function addNumbers (num1, num2){
    console.log('Given number ' + num1 + ' & ' + num2);
    var total = num1 + num2;
    return total; 
}

// var result = addNumbers (10, 20);
// console.log('After adding these number, total is ' + result);


// subtracting 2 number
function subtractNumber (num1, num2) {
    console.log('Given number ' + num1 + ' & ' + num2);
    var remain = num1 - num2;
    return remain;
}

var num1 = 20;
var num2 = 10;
// var result = subtractNumber (num1, num2);
// console.log('After subtracting these number, result is ' + result);\


// multiplication of 2 numbers
function multiplyNumber(num1, num2) {
    console.log("Given numbers are " + num1 + " & " + num2);
    var multiplicationResult = num1 * num2;
    return multiplicationResult;
}

// var result = multiplyNumber (30, 40);
// console.log("The multiplication result of these number is " + result);



// division of 2 number
function divisionNumber(num1, num2) {
    console.log('The given numbers are ' + num1 + ' & ' + num2);
    var divisionResult = num1 / num2;
    return divisionResult;
}

var result = divisionNumber (50,5);
console.log('The quotient of these number is ' + result);