/*
function removeDuplicateValue (numbers) {
    console.log(numbers);
    let duplicate = [];    // taking an empty array to store element
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (duplicate.indexOf(element) == -1){    // duplicate array'r vitore particular 'element' er index
            duplicate.push(element);    // push the element into duplicate array 
        }
    }
    return duplicate;
}
const duplicateValue = removeDuplicateValue([10, 20, 30, 10, 32]);
console.log(duplicateValue);
*/


// another way to write for loop
function removeSameValue(numbers) {
    for (const element of numbers){   // number array'r moddhe jotogulo element ache shob guloke 1 tar por ekta print korbe, jotokkhon array khali na hoy.
        console.log(element);
    }
}
removeSameValue([1, 2, 3, 4]);







