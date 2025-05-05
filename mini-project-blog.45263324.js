async function t(t,e){try{let o={method:"POST",body:JSON.stringify({postId:t,text:e.text})};return await fetch("http://localhost:3000/comments",o).then(t=>t.json(""))}catch(t){console.error(t)}}const e=async t=>{try{let e={method:"POST",body:JSON.stringify(t)};return await fetch("http://localhost:3000/peopleBlog",e).then(t=>t.json(""))}catch(t){console.error(t)}};async function o(t){try{let e={method:"DELETE",body:JSON.stringify(t)};return await fetch(`http://localhost:3000/peopleBlog/${t}`,e).then(t=>t.json())}catch(t){console.error(t)}}const u=async()=>{try{return await fetch("http://localhost:3000/peopleBlog").then(t=>t.json())}catch(t){console.error(t)}},n=async(t,e)=>{try{let o={method:"PATCH",body:JSON.stringify(e)};return await fetch(`http://localhost:3000/peopleBlog/${t}`,o).then(t=>t.json())}catch(t){console.error(t)}},r=t=>t.map(t=>`<li class="post-item">
            <h1 class="post-title">${t.title}</h1>
            <p class="post-description">${t.description}</p>
            <button class="editPostButton" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <button class="deletePostButton" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            <div class="commentsContainer" data-id="${t.id}">
        <h3>\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}:</h3>
        <ul class="commentList" data-post-id="${t.id}">
          <li></li>
        </ul>
        <form class="createCommentForm" data-post-id="${t.id}">
          <input
            type="text"
            class="commentInput"
            placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}"
            required
          />
          <button type="submit">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>
        </form>
      </div>
        </li>`).join("");u().then(t=>{document.querySelector(".post-list").innerHTML=r(t)}),document.querySelector("#createPostForm").addEventListener("submit",t=>{t.preventDefault();let o=t.currentTarget.querySelector("#titleInput").value;e({title:o,description:t.currentTarget.querySelector("#contentInput").value}),u().then(t=>{document.querySelector(".post-list").innerHTML=r(t)}),t.currentTarget.querySelector("#titleInput").value="",t.currentTarget.querySelector("#contentInput").value=""}),document.addEventListener("click",t=>{if(t.target.classList.contains("editPostButton")){let e=t.target.dataset.id,o=t.target.closest("li");document.querySelector("#edit-id").value=e,document.querySelector("#edit-titleInput").value=o.querySelector(".post-title").textContent,document.querySelector("#edit-contentInput").value=o.querySelector(".post-description").textContent,document.querySelector("#editPostForm").classList.remove("is-hidden")}}),document.querySelector("#editPostForm").addEventListener("submit",t=>{t.preventDefault();let e=document.querySelector("#edit-id").value,o={id:e,title:document.querySelector("#edit-titleInput").value,description:document.querySelector("#edit-contentInput").value};n(e,o).then(()=>{u().then(t=>{document.querySelector(".post-list").innerHTML=r(t),document.querySelector("#editPostForm").classList.add("is-hidden")})})}),document.addEventListener("click",t=>{t.target.classList.contains("deletePostButton")&&o(t.target.dataset.id).then(()=>{u().then(t=>{document.querySelector(".post-list").innerHTML=r(t)})})}),document.querySelector(".createCommentForm").addEventListener("submit",e=>{e.preventDefault();let o=document.querySelector("#edit-id").value;t(o,{postId:o,text:e.currentTarget.querySelector(".commentInput").value}),u().then(t=>{document.querySelector(".post-list").innerHTML=r(t)}),e.currentTarget.querySelector(".commentInput").value=""}),document.addEventListener("submit",async e=>{if(e.target.classList.contains("createCommentForm")){e.preventDefault();let o=e.target.dataset.postId,n=e.target.querySelector(".commentInput"),c=n.value.trim();if(!c)return;t(o,{text:c}),n.value="";let l=u();document.querySelector(".post-list").innerHTML=r(l)}});
//# sourceMappingURL=mini-project-blog.45263324.js.map
