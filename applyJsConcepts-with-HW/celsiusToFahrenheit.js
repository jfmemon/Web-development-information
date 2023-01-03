// Celsius to Fahrenheit
function celsiusToFahrenheit(number){
    let fahrenheit = ((number * (9/5)) + 32);
    return fahrenheit;
}

const result = celsiusToFahrenheit(10);
console.log(result + ' fahrenheit.');