// using function

function clickChange () {
    const p = document.getElementById('tempParagraph');
    p.innerText = 'Change paragraph by onclick method.';
}


// directly without using extra function

document.getElementById('secondParagraphButton').addEventListener('click', function() {
    document.getElementById('tempParagraph').innerText = 'This is second paragraph headline.';
});


// another way with input 

document.getElementById('submit-button').addEventListener('click', function() {
    const inputField = document.getElementById('text-input');
    document.getElementById('tempParagraph').innerText = inputField.value;
    inputField.value = '';
    // document.getElementById('tempParagraph').innerText = inputField.value;
});

document.getElementById('submit-button2').addEventListener('click', function() {
    const textInput2 = document.getElementById('text-input2');
    document.getElementById('tempParagraph').innerText = textInput2.value;
    textInput2.value = '';
});