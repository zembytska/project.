// <!--На странице xxxx.html:-->
// <!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
// <!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
//<!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-index.html, котра має детальну інфу про поточний пост.-->
// let url = new URL(location.href);
//  console.log(url2);
//  let id = url2.searchParams.get('id');
//  console.log(id);
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => response.json())
//     .then(value=> {
//         let ul = document.createElement('ul');
//         let li = document.createElement('li');
//         li.innerText =`${user.id} ${user.name} ${user.username} ${user.email}` +'address'+ JSON.stringify(user.address) + 'company' + JSON.stringify(user.company) + 'email' +JSON.stringify(user.email) + 'id' + JSON.stringify(user.id)+  'name' + JSON.stringify(user.name) + 'phone' + JSON.stringify(user.phone) + 'username' +
//             JSON.stringify(user.username) + 'website' +JSON.stringify(user.website);
//         let a = document.createElement('a');
//         a.href = `user-index.html?data=` + JSON.stringify(post);
//         a.innerText = "user";
//         ul.appendChild(a)
        //
        // ul.appendChild(li);
        // document.body.appendChild(ul);
    //
    // });

// /fetch ('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then(posts => {
//          {
//             let a= document.createElement('a');
//             a.href = `xxxx.html`;
//
//             document.body.appendChild(a);
//         }
//     });
