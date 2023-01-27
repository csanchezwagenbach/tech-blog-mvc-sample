const addCommentButton = document.querySelector("#add-comment");
const newComment = document.querySelector("#new-comment");

function addCommentHandler () {
    let content = newComment.value;
    let array = document.location.pathname.split("/")
    let post_id = array[array.length-1];
    console.log(content)
}
addCommentButton.addEventListener("click", addCommentHandler)