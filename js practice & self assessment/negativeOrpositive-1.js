function getPositiveValue (numbers) {
    console.log(numbers);
    const tempArray = [];
    for (const number of numbers) {
        if (number >= 0) {
            tempArray.push(number);
        }
        else{
            break;
        }
    }
    return tempArray;
}
const result = getPositiveValue([2, 3, 8, 9, 5, -10, 40]);
console.log(result);