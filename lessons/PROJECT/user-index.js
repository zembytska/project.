// <!--На странице xxxx.html:-->
// <!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
// <!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
//<!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-index.html, котра має детальну інфу про поточний пост.-->


let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);
console.log(user)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then(users => {

        let ul = document.createElement('ul');

        ul.innerText =`${user.id} ${user.name} ${user.username} ${user.email}` +'address'+ JSON.stringify(user.address) + 'company' + JSON.stringify(user.company) + 'email' +JSON.stringify(user.email) + 'id' + JSON.stringify(user.id)+  'name' + JSON.stringify(user.name) + 'phone' + JSON.stringify(user.phone) + 'username' +
            JSON.stringify(user.username) + 'website' +JSON.stringify(user.website);
        document.body.appendChild(ul);

    });
fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
          let div = document.createElement('div');

            let a= document.createElement('a');

            a.href = `user-index.html?id=${user.id}`;
            a.innerText = "post of current user";
            div.appendChild(a);
            document.body.appendChild(div);

    });

let url3 = new URL(location.href);
console.log(url3);
let id = url3.searchParams.get('id');
console.log(id);

 fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

    .then(resp => resp.json())
     .then(posts => {
         for (const post of posts) {
             let ul = document.createElement('ul');

             let li = document.createElement('li');
             li.innerText = post.title;
             ul.appendChild(li);
             //let a= document.createElement('a');
             //a.href = `post-index.html?data=${post.id}`;
             //a.innerText = "user";
            // li.appendChild(a);

             document.body.appendChild(ul);
         }
     });
 // fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
 //
 //     .then(resp => resp.json())
 //     .then(posts => {
 //         for (const post of posts) {
 //             let ul = document.createElement('ul');
 //
 //             let li = document.createElement('li');
 //             li.innerText = post.title + user.id;
 //             ul.appendChild(li);
 //            let a= document.createElement('a');
 //            a.href = `post-index.html?data=${post.id}`;
 //            a.innerText = "user";
 //            li.appendChild(a);
 //
 //             document.body.appendChild(ul);
 //        }
 //    });






let url4 = new URL(location.href);
console.log(url4);
let im = url4.searchParams.get('im');
console.log(im);


fetch(`https://jsonplaceholder.typicode.com/users/${im}/posts`)

    .then(resp => resp.json())
    .then(posts => {
        for (const post of posts) {
            let ul = document.createElement('ul');

            let li = document.createElement('li');
            li.innerText = post.title ;
            ul.appendChild(li);

            document.body.appendChild(ul);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

    .then(resp => resp.json())
    .then(posts => {
        for (const post of posts) {
            let ul = document.createElement('ul');

            let li = document.createElement('li');
            ul.appendChild(li);
            let a= document.createElement('a');
            a.href = `post-index.html?data=${post.id}`;
            a.innerText = "post";
            li.appendChild(a);
            document.body.appendChild(ul);
        }
    });