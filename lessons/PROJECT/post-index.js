<!--На странице post-index.html:-->
<!--7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .-->
//<!--8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->

let url = new URL(location.href);
console.log(url);
let data = url.searchParams.get('data');
console.log(data);


fetch(`https://jsonplaceholder.typicode.com/users/${data}/posts`)

    .then(resp => resp.json())
    .then(posts => {
        for (const post of posts) {
            let ul = document.createElement('ul');

            let li = document.createElement('li');
            li.innerText = `${post.id} ${post.title} ${post.body}`;
            ul.appendChild(li);


            document.body.appendChild(ul);
        }
    });
fetch(`https://jsonplaceholder.typicode.com/posts/${data}/comments`)

    .then(resp => resp.json())
    .then(posts => {
        for (const post of posts) {
            let ul = document.createElement('ul');

            let li = document.createElement('li');
            li.innerText = `${post.body} `;
            ul.appendChild(li);
            document.body.appendChild(ul);
        }
    });
let url5 = new URL(location.href);
console.log(url5);
let m = url5.searchParams.get('m');
console.log(m);



