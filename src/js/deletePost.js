export async function deletePost(postDel) {
    try {
        const options = {
            method: "DELETE",
            body: JSON.stringify(postDel)
    }
    return await fetch(`http://localhost:3000/peopleBlog/${postDel}`, options).then((response) =>
        response.json());
    } catch (error) {
    console.error(error);
    }
}