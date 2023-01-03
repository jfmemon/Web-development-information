// remove duplicate value from an array
function removeSameValue (numbers) {
    console.log(numbers);
    let duplicate = []; 
    for (const element of numbers){
        if (duplicate.indexOf(element) == -1) {
            duplicate.push(element);
        }
    }
    return duplicate;
}

const result = removeSameValue([20, 10, 15, 20, 10, 80, 90]);
console.log(result);