const deletePostButton = document.querySelector("#delete-post");

const saveNewTitle = document.querySelector("#save-new-title");
const titleUpdate = document.querySelector("#title-update");
const contentUpdate = document.querySelector("#content-update");
const saveNewContent = document.querySelector("#save-new-content")

async function deletePostHandler () {
    let array = document.location.pathname.split("/");
    let post_id = array[array.length-1];
    const response = await fetch ("/api/posts", {
        method: "DELETE",
        body: JSON.stringify({ post_id }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.replace("/dashboard")
    }
}

async function updateTitleHandler () {
    let array = document.location.pathname.split("/");
    let post_id = array[array.length-1];
    let newTitle = titleUpdate.value;

    console.log(post_id);
    console.log(newTitle);

    const response = await fetch ("/api/posts/title", {
        method: "PUT",
        body: JSON.stringify({ post_id, newTitle }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        console.log(response.json())
        document.location.reload()
    }
}


deletePostButton.addEventListener("click", deletePostHandler);
saveNewTitle.addEventListener("click", updateTitleHandler);
