const number1 = 50;
const number2 = 20;
if (number1 > number2) {
    console.log('Number1 is greater.');
}
else if (number1 < number2) {
    console.log('Number2 is greater.');
}
else if (number1 == number2) {
    console.log('Number1 & Number2 are same.');
}
else if (number1 != number2) {
    console.log('Number1 & Number2 are not same.');
}
else if (number1 <= number2) {
    console.log('Number1 is same or smaller than number2');
}
else if (number1 >= number2) {
    console.log('Number1 is greater or equal to number2.');
}
else {
    console.log('There have an problem in your input.')
}