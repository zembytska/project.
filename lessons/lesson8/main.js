
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
 function User (id, name, surname, email, phone) {
    this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;
     };

     let users = [];
    users.push (
        new User (1,'sasha', 'ivanko','inako@gmail.com', '069599463131'),
        new User(2,'ira','ivanko','123@gmail.com','0968775629'),
        new User (3,'anna','nazarenko','1234gmail.com','0937456699'),
        new User (4,'olga','petrenko','1234@gmail.com','0935556698'),
        new User (5, 'petya','karpenko', '123@gmail.com','096465667899'),
        new User(6,'vanya','panko','1234@gmail.com','0968885564'),
        new User(7,'katya','zorya','122@gmail.com','096555889990'),
        new User(8,'sasha','ivanko','112@gmail.com','133265666'),
        new User(9,'pasha','petrenko','155@gmail.com','54654655'),
        new User(10,'klava','rema','65464@gmail.com','55465465')
)
console.log(users);
  let users1 = [];
users1.push (
    new User (1,'sasha', 'ivanko','inako@gmail.com', '069599463131'),
    new User(2,'ira','ivanko','123@gmail.com','0968775629'),
    new User (3,'anna','nazarenko','1234gmail.com','0937456699'),
    new User (4,'olga','petrenko','1234@gmail.com','0935556698'),
    new User (5, 'petya','karpenko', '123@gmail.com','096465667899'),
    new User(6,'vanya','panko','1234@gmail.com','0968885564'),
    new User(7,'katya','zorya','122@gmail.com','096555889990'),
    new User(8,'sasha','ivanko','112@gmail.com','133265666'),
    new User(9,'pasha','petrenko','155@gmail.com','54654655'),
    new User(10,'klava','rema','65464@gmail.com','55465465')
)
//console.log(users1);
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let users2= [];
users2.push (
    new User (1,'sasha', 'ivanko','inako@gmail.com', '069599463131'),
    new User(2,'ira','ivanko','123@gmail.com','0968775629'),
    new User (3,'anna','nazarenko','1234gmail.com','0937456699'),
    new User (4,'olga','petrenko','1234@gmail.com','0935556698'),
    new User (5, 'petya','karpenko', '123@gmail.com','096465667899'),
    new User(6,'vanya','panko','1234@gmail.com','0968885564'),
    new User(7,'katya','zorya','122@gmail.com','096555889990'),
    new User(8,'sasha','ivanko','112@gmail.com','133265666'),
    new User(9,'pasha','petrenko','155@gmail.com','54654655'),
    new User(10,'klava','rema','65464@gmail.com','55465465')
);
let sort = users2.sort((a,b)=> {
    return a.id - b.id;
});
console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [order];
        this.foo = function () {
            console.log(this);
        };
    }

    static foobar() {
    }
    bar (){
        console.log(this);
    }
}
let Clients= [];
Clients.push (
    new Client (1,'sasha', 'ivanko','inako@gmail.com', '069599463131',['3']),
    new Client(2,'ira','ivanko','123@gmail.com', '0978974',['4']),
    new Client (3,'anna','nazarenko','1234gmail.com','0937456699',['10']),
    new Client (4,'olga','petrenko','1234@gmail.com','09355566980',['5']),
    new Client (5, 'petya','karpenko', '123@gmail.com','096465667899',['3']),
    new Client(6,'katya','zorya','122@gmail.com','096555889990',['7']),
    new Client(7,'sasha','ivanko','112@gmail.com','133265666',['2']),
    new Client(8,'pasha','petrenko','155@gmail.com','54654655',['9']),
    new Client(9,'klava','rema','65464@gmail.com','55465465',['12']),
    new Client(10,'anna','karpenko','karp@gmail.com','0968772649',['8'])
);
console.log(Clients);
Client.foobar;

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let Clients1= [];
Clients1.push (
    new Client (1,'sasha', 'ivanko','inako@gmail.com', '069599463131',['3']),
    new Client(2,'ira','ivanko','123@gmail.com', '0978974',['4']),
    new Client (3,'anna','nazarenko','1234gmail.com','0937456699',['10']),
    new Client (4,'olga','petrenko','1234@gmail.com','09355566980',['5']),
    new Client (5, 'petya','karpenko', '123@gmail.com','096465667899',['3']),
    new Client(6,'katya','zorya','122@gmail.com','096555889990',['7']),
    new Client(7,'sasha','ivanko','112@gmail.com','133265666',['2']),
    new Client(8,'pasha','petrenko','155@gmail.com','54654655',['9']),
    new Client(9,'klava','rema','65464@gmail.com','55465465',['12']),
    new Client(10,'anna','karpenko','karp@gmail.com','0968772649',['8'])
);

let sort1 =Clients1.sort((a,b)=> {
    return b.order - a.order;
});
console.log(sort1)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car ( model, year,maxSpeed,maker, engine){
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function(msg, mesg) {
        console.log(`${msg}${this.maxSpeed}${mesg}`);
   };
    this.info = function(name,value) {
        console.log(`{model}${this.model}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {console.log(this.maxSpeed+=newSpeed)};
    this.changeYear = function (newValue){'year${this.year'};
    this.addDriver = function (vodiy) {car.vodiy = vodiy};
    }

let car1=new car('GMC', '2018','250','USA','1.8');
console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
