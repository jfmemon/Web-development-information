// find the cheapest phone
const phones = [
    {brand: 'nokia', price: 20000, color: 'white', camera: 10},
    {brand: 'samsung', price: 25000, color: 'black', camera: 8},
    {brand: 'helio', price: 18000, color: 'yellow', camera: 7},
    {brand: 'htc', price: 8000, color: 'blue', camera: 9},
    {brand: 'lg', price: 10000, color: 'cyan', camera: 1},
]
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);
