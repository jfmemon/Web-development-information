document.getElementById('comment-button').addEventListener('click', function() {
    const commentInput = document.getElementById('text-comment');
    // console.log(commentInput.value);
    const createComment = document.createElement('p');    // element create korlam paragraph hishebe
    createComment.innerText = commentInput.value;    //  element er vitore text hishebe thakbe input box er value(jei value dibe)
    const commentContainer = document.getElementById('comment-storage');    // mom ke id diye call kore niye elam
    commentContainer.appendChild(createComment);    // mom er kache child ke pathalam
    commentInput.value = '';    // clean the value from the input box/ text area


})