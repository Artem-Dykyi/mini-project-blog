 export async function createComment(postId, comment) {
    try { 
        const options = {
            method: "POST",
            body: JSON.stringify({
                postId,
                text: comment.text
              })
    }
    return await fetch(`http://localhost:3000/comments`, options).then((response) =>
        response.json(""));
    } catch (error) {
    console.error(error);
    }
}


