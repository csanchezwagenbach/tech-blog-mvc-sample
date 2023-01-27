$(".blog-card").click(function(event){
    let element = event.target;
    console.log(element);
    let parentCard = $(element).parents(".card")
    let postId = $(parentCard).attr("data-number")
    
    if(postId) {
        document.location.replace(`/post/${postId}`)
    }
});