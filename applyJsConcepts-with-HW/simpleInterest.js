// Calculate simple interest 
function interestCalculate(initialPrincipleBalance, annualInterestRate, timeInYear) {
    let totalInterest = (initialPrincipleBalance * (1 + ((annualInterestRate / 100) * timeInYear)));
    return totalInterest;
}

const result = interestCalculate(600, 10, 2);
console.log('The interest = ' + result);