const shoppingProducts = [
    {name: 'laptop', price: 100000, quantity: 2},
    {name: 'mouse', price: 1200, quantity: 5},
    {name: 'keyboard', price: 800, quantity: 10},
    {name: 'charger', price: 700, quantity: 1}
]
let totalCost = 0;
for (const product of shoppingProducts) {
    console.log(product);
    totalCost = totalCost + (product.price * product.quantity);
}
console.log(totalCost);

