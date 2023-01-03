const products = [
    {name: 'lenovo laptop', price: 150000},
    {name: 'samsung laptop', price: 55000},
    {name: 'apple laptop', price: 60000},
    {name: 'asus laptop', price: 50000},
    {name: 'hp laptop', price: 35000},
    {name: 'vaio laptop', price: 30000},
    {name: 'huawei laptop', price: 80000},
    {name: 'realme laptop', price: 20000}
]

// for break:
// function continueBreak (products) {
//     for (const product of products) {
//         if(product.price < 50000) {
//             break;
//         }
//         console.log(product);
//     }
// }

function continueBreak (products) {
    console.log(products);
        for (const product of products) {
            if(product.price < 50000) {
                continue;
            }
            console.log(product);
        }
    }
continueBreak (products);