//   export const getPosts = async (page) => {
//     try{
//         return await fetch(`http://localhost:3000/peopleBlog?_limit=4&_page=2`).then((response) => 
//             response.json());
//     } catch (error) {
//         console.error(error);
//         } 
// }



export const getPosts = async () => {
    try{
        const postsRes = await fetch(`http://localhost:3000/peopleBlog`);
        const commentsRes = await fetch("http://localhost:3000/comments");

        const posts = await postsRes.json();
        const comments = await commentsRes.json();

        
        return posts.map(post => ({...post, comments: comments.filter(comment => comment.postId === post.id)}));
        } catch (error) {
            console.error(error);
            } 
        }



