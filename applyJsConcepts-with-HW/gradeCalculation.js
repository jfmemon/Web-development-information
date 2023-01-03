// Grade calculation
function gradeCalculation(number) {
    if (number >= 80 && number <= 100) {
        console.log('A+');
    }
    else if(number >= 75 && number <= 79) {
        console.log('A');
    }
    else if(number >= 70 && number <= 74) {
        console.log('A-');
    }
    else if(number >= 65 && number <= 69) {
        console.log('B+');
    }
    else if(number >= 60 && number <= 64) {
        console.log('B');
    }
    else if(number >= 55 && number <= 59) {
        console.log('B-');
    }
    else if(number >= 50 && number <= 54) {
        console.log('C+');
    }
    else if(number >= 45 && number <= 49) {
        console.log('C');
    }
    else if(number >= 40 && number <= 44) {
        console.log('D');
    }
    else{
        console.log('F');
    }
}

gradeCalculation(85);