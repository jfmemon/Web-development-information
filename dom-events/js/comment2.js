document.getElementById('comment-button').addEventListener('click', function() {
    const createComment = document.getElementById('comment-text');
    // console.log(createComment.value);
    const takeComment = document.createElement('p');
    takeComment.innerText = createComment.value;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(takeComment);
    takeComment.value = '';
});

document.getElementById('delete-button').addEventListener('click', function(){
    const deleteItem = document.getElementById('temp-comment').style.display ='none';
});