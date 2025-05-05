async function startApp() {
    const posts = await getPosts();
    renderPosts(posts);
}
    