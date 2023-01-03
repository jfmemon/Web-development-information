// Fahrenheit to Celsius 
function fahrenheitToCelsius(number) {
    let celsius = ((number - 32) * (5/9));
    return celsius;
}

const result = fahrenheitToCelsius(1);
console.log(parseFloat(result.toFixed(2)) + ' celsius.');
