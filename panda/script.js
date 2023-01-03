const headingOne = document.getElementsByTagName('h1');
for (const h1 of headingOne) {
    h1.style.color = 'lightBlue';
}

const headingFive = document.getElementsByTagName('h5');
for (const h5 of headingFive) {
    h5.style.color = 'yellow';
}

const headingThree = document.getElementsByTagName('h3');
for (const h3 of headingThree) {
    h3.style.color = 'coral';
}

document.getElementById('backpack').style.backgroundColor = 'tomato';

const cardRadius = document.getElementsByClassName('card');
for (const card of cardRadius) {
    card.style.borderRadius = '30px'; 
}


document.getElementById('home-button').addEventListener('click', function() {
    console.log('Home-button clicked.');
});

// remove item
const buyButton = document.getElementsByClassName('buy-button');
for (const buy of buyButton) {
    // console.log(buy);
    buy.addEventListener('click', function(event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// submit button enable by verifying with input text
document.getElementById('verificationInput').addEventListener('keyup', function(event){
    const submitButton = document.getElementById('submit-button');
    if(event.target.value == 'email'){        // target = verificationInput
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
});

// changing image on mouseEnter and mouse0ut
const image = document.getElementById('change-image');
image.addEventListener('mouseenter',function(){
    image.src= 'images/laptopWithDog.jpg';
})
image.addEventListener('mouseout',function(){
    image.src= 'images/banner-images/headphone.png';
})


// background color change on double click
const bgColorChange = document.getElementById('bg-color');
bgColorChange.addEventListener('dblclick', function(){
    bgColorChange.style.backgroundColor= 'red';
})