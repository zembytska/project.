// <!--В index.html-->
// <!--1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.-->
<!--3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку xxxx.html, котра має детальну інфорацію про об'єкт на який клікнули-->

let url = new URL ('https://jsonplaceholder.typicode.com/users')
fetch(url)
    .then((response) => response.json())
    .then(users => {
        for (const user of users){
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} `;
            let a= document.createElement('a');
            a.href = `user-index.html?data=`+ JSON.stringify(user);
            a.innerText = "user";
            //a.href = `user-index.html?id=${user.id}`;
            div.appendChild(a);
            document.body.appendChild(div);
        }
    });




