//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//let colours;
//color = [ 'black', 'white', 'green', 'yellow', 'red',  'pink', 'purple', 'orange', 'blue', 'gray', 'brown' ];
//console.log(color);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title:'Dark wood',
    pageCount :325,
    genre :'detective'
}
console.log(book);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let roman = {
    title:'Dark wood',
    pageCount :325,
    genre :'detective',
    autors: [
        {name:'Roma', age:20},
        {name:'Anna', age:30},
    ]
}
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {id: 1,name:"anna", username:"vredina", password:"123"},
    {id: 2,name:"vlad", username:"limon", password:"321"},
    {id: 3,name:"natasha", username:"flower", password:"111"},
    {id: 4,name:"sasha", username:"danser", password:"222"},
    {id: 5,name:"ira", username:"pink", password:"333"},
    {id: 6,name:"inna", username:"lego", password:"444"},
    {id: 7,name:"polina", username:"mouse", password:"555"},
    {id: 8,name:"valerya", username:"blond", password:"666"},
    {id: 9,name:"katya", username:"cat", password:"777"},
    {id: 10,name:"lena", username:"rose", password:"888"}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password)

//Логічні розгалуження:
// Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//let x =0;
//let x = 1;
let x=-1;
if (x!==0) {
    console.log ('true')
} else {
   console.log('false') }


//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = '59';
if (14 > 0) {
    console.log('1');}
     if (15 < 29) {
        console.log('2');
    } if (30 < 44) {
        console.log('3');
    }  if (45 < 59) {
        console.log( '4')}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = '31';
     if(1 < 10){
         console.log('1');
     } if (11<20){
         console.log('2');
     }if (21<31){
         console.log('3');
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('enter week');
switch (week) {
    case '1':
        console.log('monday');
        break;
    case '2':
        console.log('tuesday');
        break;
    case '3':
        console.log('wednessday');
        break;
    case '4':
        console.log('thursday');
        break;
    case'5':
        console.log('friday');
        break;
    case'6':
        console.log('saturday');
        break;
    case'7':
        console.log('sunday');
        break;
}
// - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно рахувати коли введені рівні числа.
let number = '';
    if ('4' > '2') {
        console.log(true);
    }
    else if ('4' < '2'){
        console.log( false);
    }
else if ('4'==='4'){
    console.log( false)
}
    //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let y = undefined;
 y = y || 'default';
console.log(y);
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

//let coursesAndDurationArray = [
  ////  {title: 'JavaScript Complex', monthDuration: 5},
    //{title: 'Java Complex', monthDuration: 6},
    //{title: 'Python Complex', monthDuration: 6},
    //{title: 'QA Complex', monthDuration: 4},
   /// {title: 'FullStack', monthDuration: 7},
    //{title: 'Frontend', monthDuration: 4}
let JavaScript = 5;
if (5===5){
    console.log(false);
}
let Java = 6;
if (6>5){
    console.log('super');
}
let Python = 6;
if (6>5){
    console.log('super');
}
let QA = 4;
if (5>4){
    console.log(false);
}
let FullStack = 7;
if (7>5){
    console.log('super');
}
let Frontend = 4;
if (4<5){
    console.log(false);
}
