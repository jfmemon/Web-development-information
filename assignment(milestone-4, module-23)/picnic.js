// Problem: 03
function picnicBudget (peoples) {
    const forFirstHundred = 5000;
    const defaultFirstHundredCost = 100 * forFirstHundred;
    const forSecondHundred = 4000;
    const defaultSecondHundredCost = 100 * forSecondHundred;
    const forRestHundred = 3000;
    if (peoples <= 100) {
        const costForFirstHundred = peoples * forFirstHundred;
        return costForFirstHundred;
    }else if (peoples > 100 && peoples <= 200) {
        const restAfterFirstHundred = peoples - 100;
        const costForSecondHundred = (restAfterFirstHundred * forSecondHundred) + defaultFirstHundredCost;
        return costForSecondHundred;
    }else {
        const restAfterSecondHundred = peoples - 200;
        const costForThirdHundred = (restAfterSecondHundred * forRestHundred) + defaultFirstHundredCost + defaultSecondHundredCost;
        return costForThirdHundred;
    }
}

const result = picnicBudget (250);
console.log(result);
