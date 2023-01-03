//Returns the absolute value (abs)

const myNumber = -5;
const absoluteValue = Math.abs(myNumber);
console.log('The absolute value of -5 = ' + absoluteValue); 


// Returns the smallest integer greater than or equal to x (ceil)

const number1 = 5.34;
const nearestGreaterInteger = Math.ceil(number1);
console.log(nearestGreaterInteger);


// Returns the largest integer less than or equal to x

const number2 = 2.34;
const nearestLeastInteger = Math.floor(number2);
console.log(nearestLeastInteger);


// Returns the value of the number x rounded to the nearest integer

const number3 = 5.58;
const nearestInteger = Math.round(number3);
console.log(nearestInteger); 


// Returns a pseudo-random number between 0 and 1. for ()=empty
for (let i = 1; i < 20; i++) {
    const number4 = Math.random() * 7;
    const result = Math.floor(number4);
    console.log(result);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const result = getRandomInt(3);
console.log(result);






