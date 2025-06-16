/*
 * Об’єкти
 * Створення об’єкта
 * Вкладені властивості
 * Доступ до властивостей через крапку
 * Доступ до вкладених властивостей
 * Доступ до властивостей через квадратні дужки
 * Зміна значення властивостей
 * Додавання властивостей



 Напиши скрипт, який для об'єкта user, послідовно:
 додає поле mood зі значенням 'happy'
 замінює значення hobby на 'skydiving'
 замінює значення premium на false
 виводить вміст об'єкта user у форматі ключ:значення використовуючи for...in

const user = {
  name: "Alice",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for(const key of keys) {
    console.log(`${key}: ${user[key]}`);
} 

 Масив об'єктів

 Перебір масива
 Пошук об'єкта за значенням властивості
Колекція значень властивості

const friends = [
  { name: "Ross", online: false },
  { name: "Joey", online: true },
  { name: "Chandler", online: true },
  { name: "Phoebe", online: false },
  { name: "Monica", online: true },
  { name: "Rachel", online: false },
];

//пошук друга за іменема

function findByName(arr, userName) {
    for(const item of arr) {
        if(item.name === userName) {  //якщо ми хочемо щоб перевірялися і верхній і нижній регістр - if(item.name.toLowerCase() === userName.toLowerCase())
            return item;
        }
    }
    return "Not found"
}

console.log(findByName(friends, "Joey"));



*******отримую імена всіх друзів********

const friends = [
  { name: "Ross", online: false },
  { name: "Joey", online: true },
  { name: "Chandler", online: true },
  { name: "Phoebe", online: false },
  { name: "Monica", online: true },
  { name: "Rachel", online: false },
];

// function getAllNames(arr) {
//     const names = [];

//     for(const lalala of arr) {
//         names.push(lalala.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends));

//Отримуємо імена тільки тих друзів які зараз онлайн

function getOnline(arr) {
    const online = [];

    for(const item of arr) {
        if(item.online === true) {
            online.push(item);
        }

    }
    return online;
}

console.log(getOnline(friends));1


*/

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каменя з
 * таким ім'ям, ціною та кількістю з об'єкта



const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];


function calcTotalPrice(stones, stoneName) {
    let sum = 0;

    for(const item of stones) {
        if(item.name === stoneName) {
            return item.quantity * item.price;
        }
    }
}


console.log(calcTotalPrice(stones, 'Сапфір'));

 */



/**
 * Об'єкти
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */






