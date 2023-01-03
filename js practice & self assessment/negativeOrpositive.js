// have to print all positive number of an array
function getPositiveValue (numbers) {
    console.log('Numbers are ' + numbers);
    const tempArray = [];
    for (const number of numbers) {
        if (number >= 0) {
           console.log(number);
        }
        else{
            break;
        }
    }
}

getPositiveValue([10, 20, 5, 7, -6, 50, 40]);
