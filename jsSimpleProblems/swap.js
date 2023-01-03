// normal approach
let first = 5;
let second = 6;
console.log(first, second);
let temporary = first;
first = second;
second = temporary;
console.log(first, second);

// destructing approach
let num1 = 10;
let num2 = 12;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);