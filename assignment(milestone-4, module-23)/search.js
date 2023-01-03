// search any property by anything you want which there have already in object
const products = [
    {name: 'nokia m30',                      price: 20000},
    {name: 'samsung laptop',                 price: 80000},
    {name: 'realme 5i',                      price: 10000},
    {name: 'lenovo laptop yoga',             price: 120000},
    {name: 'apple watch',                    price: 5020},
    {name: 'htc',                            price: 101000},
    {name: 'asus sensitive genuine laptop ', price: 220000},
    {name: 'xiaomi ultra5',                  price: 200500},
    {name: 'nektom gents watch',             price: 2500}
]
function search (products, searchText) {
    const tempArray = [];
    for (const product of products) {
        if(product.name.includes(searchText)) {
            tempArray.push(product)
        }
    }
    return tempArray;
}

const searchedResult = search(products, 'laptop');
console.log(searchedResult);
