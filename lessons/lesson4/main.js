
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    let result = a * b;
    return result;
}
let r1 = calc(10,20);

console.log(r1);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function foo(pi, r, r){
    let results = pi * r * r;
    return results;
}
let r2 = foo(3.14, 2, 5);
console.log(r2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder ( pi, pi, r, r,h ){
    let result = (pi + pi) * r * (r+ h);
    return result ;
}
let r3 = cylinder(3.14, 3.14, 2,2, 4 );
console.log(r3)

// - створити функцію яка приймає масив та виводить кожен його елемент
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
function printerArray (array) {
    for (const item of array) {
        console.log(item)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer (description ) {
    document.write(
        `
        <div>
            <h1>milk</h1>
            <p>${description}</p>
        </div>
        `
    );
}
writer('some fresh milk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function goo(description) {
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
goo('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function copy(howmanytimes,description) {
    for (let i=0; i < howmanytimes; i++)
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

copy(2,'menu');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву

        let nomers = [15, 6, 18, 22];


console.log(nomers)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = [1, 2, 10]
function sum2(num1, num2, num3) {
    return num1 + num2 + num3;
}
    console.log(sum2(1, 2, 10));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(index1, index2, ...x){
    console.log(x)
}
swap(11,22,22, 11, 33, 44)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)}
function exchange (sumUAH) {
let currencyValues = 40 / 1;
let exchangeCurrency = 38 * 1;
let currency = sumUAH / currencyValues;
let exchange = sumUAH * exchangeCurrency;
return currency;
}
let number = exchange(200)
console.log(number);