const deletePostButton = document.querySelector("#delete-post");

const saveEditsButton = document.querySelector("#save-change");
const titleUpdate = document.querySelector("#title-update");
const contentUpdate = document.querySelector("#content-update");

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

async function updatePostHandler () {
    let array = document.location.pathname.split("/");
    let post_id = array[array.length-1];
    let newTitle = titleUpdate.value;
    let newContent = contentUpdate.value;

    console.log(post_id);
    console.log(newTitle);
    console.log(newContent);

    const response = await fetch ("/api/posts", {
        method: "PUT",
        body: JSON.stringify({ post_id, newTitle, newContent }),
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
saveEditsButton.addEventListener("click", updatePostHandler);
