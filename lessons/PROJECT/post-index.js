<!--На странице post-index.html:-->
<!--7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .-->
//<!--8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->
//let url = new URL ('https://jsonplaceholder.typicode.com/comments')
// fetch(url)
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users){
//             let div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name} `;
//             let a= document.createElement('a');
//             a.href = `post-index.html?id=`+ JSON.stringify(user);
//             a.innerText = "user";
            //a.href = `user-index.html?id=${user.id}`;
            // div.appendChild(a);
            // document.body.appendChild(div);
        // }
    // });
let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);



   fetch(`https://jsonplaceholder.typicode.com/comments`)

       .then(resp => resp.json())
       .then(comments => {
          for (const comment of comments) {
              let ul = document.createElement('ul');
              ul.innerText = `${comment.id} ${comment.name} ${comment.email} ${comment.body}`;
              let a= document.createElement('a');
           a.href = `post-index.html?id=`+ JSON.stringify(comment)
               document.body.appendChild(ul);
          }
       });
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//
//     .then(resp => resp.json())
//     .then(comment => {
//             let ul = document.createElement('ul');
//             let li = document.createElement('li');
//             li.innerText = `${comment.id} ${comment.name} ${comment.email} ${comment.body}`;
//             ul.appendChild(li);
//             let a= document.createElement('a');
//             a.href = `post-index.html?id=`+ JSON.stringify(user);
//             a.innerText = "user";
//             li.appendChild(a);
//
//             document.body.appendChild(ul);
//
//     });

