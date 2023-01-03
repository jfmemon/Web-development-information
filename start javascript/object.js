// declaration of object
var student = {
    name: 'Emon',
    id: 191152497,
    section:'pc-a',
    phone: 1409
}

var phone = {
    brand: 'samsung a52',
    color: 'magenta',
    type: 'android',
    screenSize: '5 inch',
    price: 20000
}


// to see object (let phone)
// console.log(phone);

// to see particular properties
// console.log(phone.type);

// store any particular properties of a object in a variable
var phonePrice = phone.price;
console.log(phonePrice);


// different ways to set new value of an object property
phone.price = 22000;   // way-1
phone['color'] = 'yellow';  // way-2
console.log(phone);