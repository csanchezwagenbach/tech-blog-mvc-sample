const addCommentButton = document.querySelector("#add-comment");
const newComment = document.querySelector("#new-comment");

async function addCommentHandler () {
    let content = newComment.value;
    let array = document.location.pathname.split("/")
    let post_id = array[array.length-1];
    console.log(content)
    const response = await fetch ("/api/comments", {
        method: "POST",
        body: JSON.stringify({ content, post_id }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (response.ok) {
        document.location.reload();
    }
}
addCommentButton.addEventListener("click", addCommentHandler)