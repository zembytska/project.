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
 // {
 //  cardSuit: '',  'spade', 'diamond','heart', 'clubs'
 //
 //
 //     value: '',  '6'-'10', 'ace','jack','queen','king','joker'
 //
 //
 //     color:'',// 'red','black'
//
let deckofcards = [
    {card: 'spade', value:'6', color:'black'},
    {card: 'spade', value:'7', color:'black'},
    {card: 'spade', value:'8', color:'black'},
    {card: 'spade', value:'9', color:'black'},
    {card: 'spade', value:'10', color:'black'},
    {card: 'spade', value:'jack', color:'black'},
    {card: 'spade', value:'queen', color:'black'},
    {card: 'spade', value:'king', color:'black'},
    {card: 'spade', value:'ace', color:'black'},
    {card: 'clubs', value:'6', color:'black'},
    {card: 'clubs', value:'7', color:'black'},
    {card: 'clubs', value:'8', color:'black'},
    {card: 'clubs', value:'9', color:'black'},
    {card: 'clubs', value:'10', color:'black'},
    {card: 'clubs',value:'jack', color:'black'},
    {card: 'clubs', value:'queen', color:'black'},
    {card: 'clubs', value:'king', color:'black'},
    {card: 'clubs', value:'ace', color:'black'},
    {card: 'diamond', value:'6', color:'red'},
    {card: 'diamond', value:'7', color:'red'},
    {card: 'diamond', value:'8', color:'red'},
    {card: 'diamond', value:'9', color:'red'},
    {card: 'diamond', value:'10', color:'red'},
    {card: 'diamond', value:'jack', color:'red'},
    {card: 'diamond', value:'queen', color:'red'},
    {card: 'diamond', value:'king', color:'red'},
    {card: 'diamond', value:'ace', color:'red'},
    {card: 'heart', value:'6', color:'red'},
    {card: 'heart', value:'7', color:'red'},
    {card: 'heart', value:'8', color:'red'},
    {card: 'heart', value:'9', color:'red'},
    {card: 'heart', value:'10', color:'red'},
    {card: 'heart', value:'jack', color:'red'},
    {card: 'heart', value:'queen', color:'red'},
    {card: 'heart', value:'king', color:'red'},
    {card: 'heart', value:'ace', color:'red'}
];
// - знайти піковий туз
let find= deckofcards.find(value => value.value === 'ace');
console.log(find);

//- всі шістки
let filterCards6 = deckofcards.filter(value=> value.value ==='6');
console.log(filterCards6);
// - всі червоні карти
let filterCards = deckofcards.filter(value=> value.color ==='red');
console.log(filterCards);
// - всі буби
let filterDiamond = deckofcards.filter(value=> value.card==='diamond');
console.log(filterDiamond);
// - всі трефи від 9 та більше
let filterCards9 = deckofcards.filter(value=> value.card ==='clubs' && value.value >= '9');
console.log(filterCards9);


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




