

const checkbox = document.getElementById('toggle');
const button = document.getElementById('orange-btn');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        // console.log("checked");
        button.classList.add('visual-effect');

    } else {
        button.classList.remove('visual-effect')

    }

})

const submitBtn = document.getElementById('submit-btn');
const commentSection = document.getElementById('comment-box');


submitBtn.addEventListener('click', () => {

    const commentTextArea = document.getElementById('comment-text-area');
    const newComment = commentTextArea.value.trim();


    if (!newComment) {
        alert("empty comments are not supported!")
        return
    };

    const newCommentBlock = document.createElement('p');
    newCommentBlock.innerText = newComment;
    newCommentBlock.setAttribute('class', 'comments')

    commentSection.appendChild(newCommentBlock);

    commentTextArea.value = '';



})