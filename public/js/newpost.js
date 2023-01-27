const submitNewPost = document.querySelector("#submit-post");

const newPostTitle = document.querySelector("#new-post-title");
const newPostContent = document.querySelector("#new-post-content");


async function submitNewPostHandler () {
const title = newPostTitle.value;
const content = newPostContent.value;

const response = await fetch ("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
        "Content-Type": "application/json"
    }
});

const newPost = await response.json();
const newPostId = await newPost.id;


if (newPostId) {
    document.location.replace(`/post/${newPostId}`)
}

}

submitNewPost.addEventListener("click", submitNewPostHandler)