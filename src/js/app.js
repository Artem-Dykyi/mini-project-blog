import { createComment } from "./createComment";
import { createPost } from "./createPost";
import { deletePost } from "./deletePost";
import { getPosts } from "./getPosts";
import { updatePost } from "./updatePost";
import { renderPosts } from "./renderPosts";

import Handlebars from 'handlebars';
import postTemplateSrc from '../template/postsTemplate.hbs';


export const renderPosts = (posts) => {
    const template = Handlebars.compile(postTemplateSrc);
    const html = template({ posts });
    document.querySelector(".post-list").innerHTML = html;
  };

getPosts().then((peopleBlog) => {document.querySelector(".post-list").innerHTML = renderPosts(peopleBlog)})


// Обробник події для створення поста
// document.getElementById('createPostForm').addEventListener('submit', cb);
document.querySelector("#createPostForm").addEventListener('submit', (event) => {
    event.preventDefault()

  const postTitleInput = event.currentTarget.querySelector("#titleInput").value
  const postcontentInput = event.currentTarget.querySelector("#contentInput").value

  const newPost ={
    title: postTitleInput,
    description: postcontentInput
  }

createPost(newPost)
getPosts().then((peopleBlog) => {document.querySelector(".post-list").innerHTML = renderPosts(peopleBlog)})

event.currentTarget.querySelector("#titleInput").value = ""
event.currentTarget.querySelector("#contentInput").value = ""
});

// Обробник події для редагування поста
// document.addEventListener('click', cb);
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("editPostButton")) {
      const postId = event.target.dataset.id;
      const closeELe = event.target.closest("li");
    
    document.querySelector("#edit-id").value = postId
    document.querySelector("#edit-titleInput").value = closeELe.querySelector(".post-title").textContent;
    document.querySelector("#edit-contentInput").value = closeELe.querySelector(".post-description").textContent;

    document.querySelector("#editPostForm").classList.remove("is-hidden")
    }
  });


  document.querySelector("#editPostForm").addEventListener("submit", (event) => {
    event.preventDefault() 

  const postEditId = document.querySelector("#edit-id").value;
  const updatedPost = {
    id: postEditId,
    title: document.querySelector("#edit-titleInput").value,
    description: document.querySelector("#edit-contentInput").value
  }

    updatePost(postEditId, updatedPost)
    .then(() => {getPosts()
    .then((peopleBlog) => {
        document.querySelector(".post-list").innerHTML = renderPosts(peopleBlog)
        document.querySelector("#editPostForm").classList.add("is-hidden");
    })

      });

})



// Обробник події для видалення поста////
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("deletePostButton")) {
      const postId = event.target.dataset.id;
      deletePost(postId)
        .then(() => {getPosts()
        .then((peopleBlog) => {document.querySelector(".post-list").innerHTML = renderPosts(peopleBlog)})
      });
    }
  });

// Обробник події для додавання коментаря
document.querySelector(".createCommentForm").addEventListener('submit', (event) => {
event.preventDefault()


const postEditId = document.querySelector("#edit-id").value;
const textComent = event.currentTarget.querySelector(".commentInput").value


  const newComent ={
    // id: postEditId,
    postId: postEditId,
    text: textComent
  }

createComment(postEditId, newComent)
getPosts().then((peopleBlog) => {document.querySelector(".post-list").innerHTML = renderPosts(peopleBlog)})

event.currentTarget.querySelector(".commentInput").value = ""
});

// Запуск додатку


// 




  document.addEventListener("submit", async (event) => {
    if (event.target.classList.contains("createCommentForm")) {
      event.preventDefault();
  
      const postId = event.target.dataset.postId;
      const input = event.target.querySelector(".commentInput");
      const text = input.value.trim();
  
      if (!text) return;
  
      await createComment(postId, { postId, text }); 
      input.value = "";
  
      const updatedPosts = await getPosts();
      renderPosts(updatedPosts);
    }
  });



// let page = 1
// getPosts(page).then((peopleBlog) => {document.querySelector(".post-list").innerHTML = renderPosts(peopleBlog)})


// document.querySelector(".load-more").addEventListener("click", () => {
//     page ++;
//     getPosts(page).then((peopleBlog) => {document.querySelector(".post-list").insertAdjacentHTML("beforeend", renderPosts(peopleBlog));
//       });
// })     





// getPosts(page).then((peopleBlog) => {
//   renderPosts(peopleBlog);
//   console.log({peopleBlog});
// });
let page = 1;


document.querySelector(".load-more").addEventListener("click", () => {
  page += 1;
  getPosts(page).then((peopleBlog) => { 
  renderPosts(peopleBlog);
  });
});


// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("load-more")) {
//         page +=1;
//         getPosts(page).then((peopleBlog) => { 
//         renderPosts(peopleBlog);
//         });
//     }
//   });





//пошук постів 
let allPosts = []; 

const filterPosts = (searchTerm) => {
  const value = searchTerm.trim().toLowerCase();

  if (!value) {
    renderPosts(allPosts);
    return;
  }

  const filtered = allPosts.filter(post =>
    post.title.toLowerCase().includes(value) ||
    post.description.toLowerCase().includes(value)
  );

  renderPosts(filtered);
};

document.querySelector("#searchInput").addEventListener("input", (e) => {
    filterPosts(e.target.value);
  });

  getPosts().then(posts => {
    allPosts = posts;           
    renderPosts(allPosts);      
  });

  startApp();