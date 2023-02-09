// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let autors = [
    {name: 'ivan',  status: false},
    {name: 'petro', status: true},
    {name: 'kolya', status: true},
    {name: 'inna',  status: false},
    {name: 'max',  status: true},
    {name: 'anya',  status: false},
    {name: 'oleg',  status: false},
    {name: 'andrey', status: true},
    {name: 'masha',  status: true},
    {name: 'olya',  status: false},
    {name: 'ira',  status: true}
];
for (let autor of autors) {
    document.write(`<div>${autor.name} ${autor.status}</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

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
for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    document.write(`<div>${color.name} ${color.status} ${i}</div>`);
 }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 let tatles = [
     {name: 'oleg'},
     {name: 'ivan'},
     {name: 'lera'},
     {name: 'ira'},
     {name: 'anna'},
     {name: 'ganna'},
     {name: 'bogdana'},
     {name: 'masha'},
     {name: 'vlad'},
     {name: 'inna'},
     {name: 'misha'},
     {name: 'bogdan'},
     {name: 'vova' },
     {name: 'sasha'},
     {name: 'natasha'},
     {name: 'karina'},
     {name: 'dasha'},
     {name: 'olena'},
     {name: 'makar'},
     {name: 'oleg'}
 ];

let j=0;
while (j < tatles.length)
{
    let tatle=tatles[j];
    document.write(`<div><h1>${tatle.name}</h1></div>`);
    ++j;
}



// - За допомогою циклу w{hile вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
   let countries = [

        {name: 'Ukraine', city: 'Kyiv'},
        {name: 'Ukraine', city: 'Lviv'},
        {name: 'Poland', city: 'Gdansk'},
        {name: 'Brazil', city: 'Brasilia'},
        {name: 'Bulgaria', city: 'Sofia'},
        {name: 'Canada', city: 'Ottawa'},
        {name: 'Cuba', city: 'Havana'},
        {name: 'Cyprus', city: 'Nicosia'},
        {name: 'Czechia', city: 'Prague'},
        {name: 'Ukraine', city: 'Odessa'},
        {name: 'Hungary', city: 'Budapest'},
        {name: 'Denmark', city: 'Copenhagen'},
        {name: 'Egypt', city: 'Cairo'},
        {name: 'Ukraine', city: 'Donetsk'},
        {name: 'Ukraine', city: 'Lutsk'},
        {name: 'Finland', city: 'Helsinki'},
        {name: 'France', city: 'Paris'},
        {name: 'Italy', city: 'Rome'},
        {name: 'Greece', city: 'Athens'},
        {name: 'Hungary', city: 'Budapest'},
        {name: 'India', city: 'New Delhi'},
    ]
    let i = 0;
    while (i < countries.length) {
        let country = countries[i];
        document.write(`<div><h1>${country.name} ${country.city} ${i}</h1></div>`);
        i++;
    }
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
    let listofitems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

    document.write(`<ul>`);
    for (const listofitem of listofitems) {
        document.write(`<li>${listofitem}</li>`);
    }
    document.write(`</ul>`);


//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// // <img src="IMAGE" alt="" class="product-image">
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

    let products = [
        {
            title: 'milk',
            price: 22,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
        },
    ];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        document.write(`<div class="product-card">
   <h3>${product.title} ${product.price} </h3>
   <img src="${product.image}" alt="">
</div>`);
    }

// --------------------
//     є масив за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];


    for (const user of users) {
        if (user.status) ;
        {
            document.write(`${user.name} -- ${user.age}--${user.status}`);
        }
    }

    for (const user of users) {
        if (user.age > 30) ;

            console.log(user);

    }
