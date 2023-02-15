// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a,b) => a * b;
console.log(calc(10, 20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let foo = (pi, r, h) => pi * r * h;
console.log(foo(3.14, 2, 5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylin = (pi, pi2, r, r2, h) => (pi + pi2)*r* (r+ h);
console.log(cylin(3.14, 3.14, 2,2,4));

//- створити функцію яка приймає масив та виводить кожен його елемент

let printerArray = (array) => {
    for (const item of array) {
        console.log(item)
    }
};
let colors = [
    {name: 'black', status: false},
    {name: 'white', status: true},
    {name: 'blue',  status: true},
    {name: 'yellow',  status: false},
    {name: 'pink',  status: true},
    {name: 'braun',  status: false},
    {name: 'grey',  status: false},
    {name: 'red',  status: true},
    {name: 'orange', status: true},
    {name: 'green',  status: false},
    {name: 'purple', status: true}
];
printerArray(colors);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
 let paragraph = (arguments) => {
    document.write(
        `
        <div>
            <h2>milk</h2>
            <p>${arguments}</p>
        </div>
       `
    );
}
paragraph('some fresh milk')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let goo = (description)=> {
    document.write(
        `
    <ul>
      <li>${description}</li>
      <li>${description}</li>
      <li>${description}</li>
    </ul>
    `
    );
}
goo('java');
 // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liCreator = (description, counter)=> {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
         document.write(`<li>${description}</li>`);
     }
     document.write(`</ul>`);
}

 liCreator('menu',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const numbers = [1, 2, 3, 'Hi', true];
let too =  (item)=> {
    document.write(`<ul>`)}
    for (const item of numbers) {
        document.write(`<li>${item}</li>`);
    }
{  document.write(`</ul>`)};

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objCreator = (objects)=> {
    for (const item of objects) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}
let names = [
    {
        id: 'snow',
        name: 'masha',
        age: 22
    }
];
objCreator(names);


// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


 let sum=(numberos)=> {
    let basket = 0; {
        for (const number of numberos)
        basket = basket + number;
    }


 }
let number = [1,10];
sum(number)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

