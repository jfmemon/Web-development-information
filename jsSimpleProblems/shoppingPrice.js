const products = [
    {name: 'pant', price: 2400},
    {name: 'shirt', price: 1500},
    {name: 't-shirt', price: 1200},
    {name: 'court', price: 5000},
    {name: 'shoe', price: 4500}
]
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);