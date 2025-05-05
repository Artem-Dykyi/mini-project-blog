// export async function createPost(title, content) {
//     try {
//     } catch (error) {
//     console.error(error);
//     }
// }

export const createPost = async (newPost) => {
    try {
        const options = {
            method: "POST",
            body: JSON.stringify(newPost)
    }
        return await fetch("http://localhost:3000/peopleBlog", options).then((response) =>
        response.json(""));
    } catch (error) {
        console.error(error);
        } 
    
}