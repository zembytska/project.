// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strin = 'hello world, lorem ipsum, javascript is cool';
console.log(strin.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
 let string = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';
 console.log(string.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let stoo = ' dirty string   ';
let split = stoo.replaceAll(' ','');
        console.log( split);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToarray = (str)=> str.split(' ');
        console.log(stringToarray('ревуть воли як ясла повні'));
let str = 'Ревуть воли як ясла повні';

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sort = nums.sort((a, b) => b-a);
console.log(sort);
let sort2 = nums.sort((a,b) => a-b);
console.log(sort);

// - є масив
//  let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
 let sort3 = coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration;
 });
 console.log(sort3);
 let filterCourses = coursesAndDurationArray.filter(value=> value.monthDuration > 5);
console.log(filterCourses);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
//let find= color.find(value => value.color === 'red');
//console.log(find);

 {
  cardSuit: '',  'spade', 'diamond','heart', 'clubs'
     valrue: '',  '6'-'10', 'ace','jack','queen','king','joker'
     color:'', 'red','black'

  }


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
    // взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker




