// total paper required
function paperRequirements (firstBookRequired, secondBookRequired, thirdBookRequired) {
    console.log ('First book need ' + firstBookRequired + ' pieces.');
    console.log ('Second book need ' + secondBookRequired + ' pieces.');
    console.log ('Third book need ' + thirdBookRequired + ' pieces.');
    const paperRequiredForFirstBook = 100;
    const paperRequiredForSecondBook = 200;
    const paperRequiredForThirdBook = 300;
    const totalPaperRequiredForFirstBook = firstBookRequired * paperRequiredForFirstBook;
    const totalPaperRequiredForSecondBook = secondBookRequired * paperRequiredForSecondBook;
    const totalPaperRequiredForThirdBook = thirdBookRequired * paperRequiredForThirdBook;
    const totalPaperRequired = totalPaperRequiredForFirstBook + totalPaperRequiredForSecondBook + totalPaperRequiredForThirdBook;
    return totalPaperRequired;
}
const result = paperRequirements (5, 10, 4);
console.log('Total ' + result + ' pages required for all books.');