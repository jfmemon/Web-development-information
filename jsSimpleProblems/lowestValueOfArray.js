// find lowest value of an array
function lowestValue(numbers) {
    console.log(numbers);
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let storage = numbers[i];
        if(min > storage) {
            min = storage;
        }
    }
    return min;
}

const minimumValue = lowestValue([50, 90, 40, 60, 10, 45]);
console.log(minimumValue);