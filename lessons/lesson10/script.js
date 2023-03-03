let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const body = document.querySelector('body');
for (const item of  coursesAndDurationArray2){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p')
}
const liArr= ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const body2 = document.querySelector('body2');
const ul = document.createElement('ul');

for (const item of liArr){
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);

}
body.appendChild(ul);