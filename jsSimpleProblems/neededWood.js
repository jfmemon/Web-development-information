// let wood need for a chair = 3 cft
// let wood need for a table = 10 cft
// let wood need for a bed = 50 cft

function woodNeeded (chairNeed, tableNeed, bedNeed) {
    const forSingleChair = 3;
    const forSingleTable = 10;
    const forSingleBed = 50;

    let chairCost = forSingleChair * chairNeed;
    let tableCost = forSingleTable * tableNeed;
    let bedCost = forSingleBed * bedNeed;
    let totalCost = chairCost + tableCost + bedCost;

    return totalCost;
}

const totalWoodNeeded = woodNeeded(1, 1, 1);
console.log(totalWoodNeeded);