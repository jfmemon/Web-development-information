// find largest value of an array
function largestValue (numbers) {
    console.log(numbers);
     max = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        let largest = numbers[i];
        if(largest > max){
            max = largest;
        }
    }
    return max;
}

const largestValueOfArray = largestValue([-50, -30, -80, -20, -90, -75]);
console.log(largestValueOfArray + ' is the largest value in this array.');