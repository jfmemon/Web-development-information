// string reverse 
function stringReverse (text) {
    console.log(text);
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const result = stringReverse('Hello, how are you?');
console.log(result);


