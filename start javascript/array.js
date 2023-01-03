var books = ['english', 'bangla', 'islam', 'science', 'social'];
// console.log(books);
//var scienceIndex = books.indexOf('science');
// console.log(scienceIndex);
var index = books[1];
console.log(books);
books[1] = 'math';        //value change of array.
books[2] = 'Religion';
console.log(books);


var array1 = [1, 2, 3, 4];
array1.shift();    //remove the 1st element from the array ( as pop but from 1st element )
// console.log(array1);


var array2 = [1, 2, 3, 4];
array2.unshift(5);    //add as the 1st element in the array ( as push but as the 1st element )
//console.log(array2);