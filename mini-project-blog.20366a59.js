const t=async t=>{try{let e={method:"POST",body:JSON.stringify(t)};return await fetch("http://localhost:3000/peopleBlog",e).then(t=>t.json(""))}catch(t){console.error(t)}};async function e(t){try{let e={method:"DELETE",body:JSON.stringify(t)};return await fetch(`http://localhost:3000/peopleBlog/${t}`,e).then(t=>t.json())}catch(t){console.error(t)}}const u=async()=>{try{return await fetch("http://localhost:3000/peopleBlog").then(t=>t.json())}catch(t){console.error(t)}},o=async(t,e)=>{try{let u={method:"PATCH",body:JSON.stringify(e)};return await fetch(`http://localhost:3000/students/${t}`,u).then(t=>t.json())}catch(t){console.error(t)}},n=t=>t.map(t=>`<li class="post-item">
            <h1 class="post-title">${t.title}</h1>
            <p class="post-description">${t.description}</p>
            <button class="editPostButton" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <button class="deletePostButton" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            <div class="commentsContainer" data-id="">
        <h3>\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}:</h3>
        <ul>
          <li></li>
        </ul>
        <form class="createCommentForm">
          <input
            type="text"
            class="commentInput"
            placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}"
            required
          />
          <button type="submit">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>
        </form>
      </div>
        </li>`).join("");u().then(t=>{document.querySelector(".post-list").innerHTML=n(t)}),document.querySelector("#createPostForm").addEventListener("submit",e=>{e.preventDefault();let o=e.currentTarget.querySelector("#titleInput").value;t({title:o,description:e.currentTarget.querySelector("#contentInput").value}),u().then(t=>{document.querySelector(".post-list").innerHTML=n(t)}),e.currentTarget.querySelector("#titleInput").value="",e.currentTarget.querySelector("#contentInput").value=""}),document.addEventListener("click",t=>{if(t.target.classList.contains("editPostButton")){let e=t.target.dataset.id,u=t.target.closest("li");document.querySelector("#edit-id").value=e,document.querySelector("#edit-titleInput").value=u.querySelector(".post-title").textContent,document.querySelector("#edit-contentInput").value=u.querySelector(".post-description").textContent,document.querySelector("#editPostForm").classList.remove("is-hidden")}}),document.querySelector("#editPostForm").addEventListener("submit",t=>{t.preventDefault();let e=document.querySelector("#edit-id").value,r={id:e,title:document.querySelector("#edit-titleInput").value,description:document.querySelector("#edit-contentInput").value};o(e,r).then(()=>{u().then(t=>{document.querySelector(".post-list").innerHTML=n(t),document.querySelector("#editPostForm").classList.add("is-hidden")})})}),document.addEventListener("click",t=>{t.target.classList.contains("deletePostButton")&&e(t.target.dataset.id).then(()=>{u().then(t=>{document.querySelector(".post-list").innerHTML=n(t)})})});
//# sourceMappingURL=mini-project-blog.20366a59.js.map
