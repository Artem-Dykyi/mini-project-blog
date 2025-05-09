// Оновлення відображення постів на сторінці

// export const renderPosts = (posts) =>
//   posts.map(
//       (post) =>
//         `<li class="post-item">
//             <h1 class="post-title">${post.title}</h1>
//             <p class="post-description">${post.description}</p>
//             <button class="editPostButton" data-id="${post.id}">Редагувати</button>
//             <button class="deletePostButton" data-id="${post.id}">Видалити</button>
//             <div class="commentsContainer" data-id="${post.id}">
//         <h3>Коментарі:</h3>
//        <ul class="commentList" data-post-id="${post.id}">
//         </ul>
//         <form class="createCommentForm" data-post-id="${post.id}">
//           <input
//             type="text"
//             class="commentInput"
//             placeholder="Новий коментар"
//             required
//           />
//           <button type="submit">Додати коментар</button>
//         </form>
//       </div>
//         </li>`
//     )
//     .join("");


    


export const renderPosts = (posts) => {
    const container = document.querySelector("#postsContainer");
    container.innerHTML = ""; // очищаємо перед вставкою
  
    posts.forEach(post => {
      const commentsHTML = post.comments
        .map(comment => `<li>${comment.text}</li>`)
        .join("");
  
      container.insertAdjacentHTML("beforeend",
        `<li class="post-item">
          <h1 class="post-title">${post.title}</h1>
          <p class="post-description">${post.description}</p>
          <button class="editPostButton" data-id="${post.id}">Редагувати</button>
          <button class="deletePostButton" data-id="${post.id}">Видалити</button>
          <div class="commentsContainer" data-id="${post.id}">
            <h3 class="commentTitle">Коментарі:</h3>
            <ul class="commentList" data-post-id="${post.id}">
              ${commentsHTML}
            </ul>
            <form class="createCommentForm" data-post-id="${post.id}">
              <input
                type="text"
                class="commentInput"
                placeholder="Новий коментар"
                required
              />
              <button class="addComentsButton" type="submit">Додати коментар</button>
            </form>
          </div>
        </li>`);
    });
  };
  