// export async function updatePost(id, title, content) {
//     try {
//     } catch (error) {
//     console.error(error);
//     } 
// }



export const updatePost = async (postId, postUpdate)=>{
    try {
        const options = {
            method: "PATCH",
            body: JSON.stringify(postUpdate)
    }
        return await fetch(`http://localhost:3000/peopleBlog/${postId}`, options).then((response) =>
        response.json());
    }catch (error) {
        console.error(error);
        } 
}