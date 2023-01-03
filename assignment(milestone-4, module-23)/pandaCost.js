// Problem: 02
function pandaCost (singaraQuantity, samucaQuantity, jalebiQuantity) {
    const perSingaraPrice = 7;
    const perSamucaPrice = 10;
    const perJalebiPrice = 15;
    const costOfSingara = singaraQuantity * perSingaraPrice;
    const costOfSamuca = samucaQuantity * perSamucaPrice;
    const costOfJalebi = jalebiQuantity * perJalebiPrice;
    const totalCost = costOfSingara + costOfSamuca + costOfJalebi;
    return totalCost;
}

const result = pandaCost (2, 5, 3);
console.log(result);