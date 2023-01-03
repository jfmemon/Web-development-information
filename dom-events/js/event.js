function makeRed() {
    document.body.style.backgroundColor= 'red';
    document.body.style.color= 'white';

}

function makeYellow() {
    document.body.style.backgroundColor= 'yellow';
    document.body.style.color= 'white';
}

function makeDark() {
    document.body.style.backgroundColor= 'black';
    document.body.style.color= 'white';
}
function makeLight() {
    document.body.style.backgroundColor= 'white';
    document.body.style.color= 'black';
}

const blue = document.getElementById('yellow-green');
// console.log(blue);
blue.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'greenYellow';
    document.body.style.color = 'white';
}


const skyBlueButton = document.getElementById('make-skyblue');
// anonymous function (no name of function called anonymous function.)
skyBlueButton.onclick = function () {
    document.body.style.backgroundColor = 'skyBlue';
}

// using addEventListener function
const mediumPurpleButton = document.getElementById('make-mediumPurple');
mediumPurpleButton.addEventListener('click', makeMediumPurple);
function makeMediumPurple() {
    document.body.style.backgroundColor = 'mediumPurple';
    document.body.style.color = 'white';
}

// another process using addEventListener function
const hotPinkButton = document.getElementById('make-hotPink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotPink';
    document.body.style.color = 'white';
    
});

// using addEventListener function directly
document.getElementById('make-powderBlue').addEventListener('click',function() {
    document.body.style.backgroundColor = 'powderBlue';
    document.body.style.color = 'white';
});