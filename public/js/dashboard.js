let newPostButton = document.querySelector("#new-post");

function newPostButtonHandler () {
    document.location.replace("/newpost")
}

newPostButton.addEventListener("click", newPostButtonHandler)