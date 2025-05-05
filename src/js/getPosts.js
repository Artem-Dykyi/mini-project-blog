  export const getPosts = async () => {
    try{
        return await fetch("http://localhost:3000/peopleBlog").then((response) => 
            response.json());
    } catch (error) {
        console.error(error);
        } 
}



  