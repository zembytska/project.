let url = new URL ('https://jsonplaceholder.typicode.com/users')
fetch(url)
    .then((response) => response.json())
    .then(users => {
        for (const user of users){
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} `;
            let a= document.createElement('a');
            a.href = `user-index.html?data=` + JSON.stringify(user);
            a.innerText = "user";
            div.appendChild(a);
            document.body.appendChild(div);
        }
    });


// <!--На странице xxxx.html:-->
// <!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
// <!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
//<!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-index.html, котра має детальну інфу про поточний пост.-->





