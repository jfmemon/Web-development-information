document.getElementById('delete-confirm').addEventListener('keyup', function(event) {
    const deleteButton = document.getElementById('delete-button');
    if(event.target.value == 'delete') {
        deleteButton.removeAttribute('disabled');
    }else{
        deleteButton.setAttribute('disabled', true);
    }
});

document.getElementById('delete-button').addEventListener('click', function() {
    const deletePortion = document.getElementById('delete-portion');
    deletePortion.style.display ='none';
    document.getElementById('delete-confirm').value ='';
});