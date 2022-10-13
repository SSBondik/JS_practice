/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }

//     console.log(i);
// } 


// let result = '';
// const lgth = 7;

// for (let i = 1; i < lgth; i++) {

//     for(let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) {
//                 break first;
//             }
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// const arrayOfNumbers = [];

// for (let i = 0; i < 6; i++) {

//     for (let j = 5+i; j < 11; j++) {
//         arrayOfNumbers[i] = j;
//         break;
//     }
    
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i]; j <= arr[i]; j++) {
//         result[i] = j;
//         break;
//     }
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = data[i] + " - done";
//     }
// }
// console.log(data);

// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];

// for(let i = 4; i >= 0; i--) {
//     for (let j = 4 - i; j <= 4; j++) {
//         result[j] = data[i];
//     }
    
// }
// console.log(result);
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// for (let i = 1; i < 7; i++) { //строка

//     for (let j = lines; j >= i; j--) { //отступ
//         result += ' ';
//     }
//     for(let k = 1; k < i*2; k++) { //звёзды
//         result += "*";
//     }
//     result += "\n"; //перенос
// }
// console.log(result);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
      

// for(let  i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
          
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
    
// } 

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//         i++;

//         if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
// }
// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           i++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// } while (i < 2);

// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     alert('Вы киноман');
// } else {
//     alert("Произошла ошибка");
// }

// console.log(personalMovieDB);


// const usd = 28

// function amount(value, well) {
//     console.log(value * well);
// }
// amount(470, usd);

// function getMathResult(a, b) {
//     let result = '';
//     if (typeof(b) !== 'number' || b <= 0) {
//         return a;
//     } 
        
//     for(let i = 1; i <= b; i++) {
//         if (i === b) {
//             result += `${a * i}`;
//         } else {
//             result += `${a * i}---`;
//         }
//     }
//     return result;
// }
// console.log(getMathResult(14,8));


// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for(let  i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '');
                  
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//             console.log('done!');
//         } else {
//             console.log('error');
//             i--;
//         }      
//     } 
        
// }
// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert("Произошла ошибка");
//     }
    
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номер ${i}`);
//     }
// }

// writeYourGenres();



// function calculateVolumeAndArea(length) {
//  if(typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//     return console.log("При вычислении произошла ошибка");
//  }
//  let V = length * length * length;
//  let S = 6 * (length * length);
//  return console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);

// }
// calculateVolumeAndArea(78);


// function getCoupeNumber(room) {
// if(typeof(room) !== 'number' || !Number.isInteger(room) || room < 0) {
//     return "Ошибка. Проверьте правильность введенного номера места";
// }
// if (room === 0 || room > 36) {
//     return "Таких мест в вагоне не существует";
// }
// return Math.ceil(room / 4);
// }
// getCoupeNumber(36);

// function getTimeFromMinutes(min) {
//     if(typeof(min) !== 'number' || min < 0 || !Number.isInteger(min)) {
//         return console.log("Ошибка, проверьте данные");
//     }
//     if(min < 60) {
//         return console.log(`Это 0 часов и ${min} минут`);
//     }
//     if(min >= 60 && min < 120) {
//         return console.log(`Это 1 час и ${min % 60} минут`);
//     }
//     if (min >= 120 && min < 300) {
//         for(let i = Math.trunc(min / 60) ; i < 5; i++) {
//             return console.log(`Это ${i} часа и ${min % 60} минут`);
//         }
//     }
//     if (min >= 300 && min < 1440) {
//         for(let k = Math.trunc(min / 60) ; k < 25; k++) {
//             return console.log(`Это ${k} часов и ${min % 60} минут`);
//         }
//     }
// }
// getTimeFromMinutes(1421);

// function findMaxNumber(a, b, c, d) {
//     if (
//         typeof (a) !== 'number' ||
//         typeof (b) !== 'number' ||
//         typeof (c) !== 'number' ||
//         typeof (d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }


// function fib(num) {
//     if (typeof (num) !== 'number' || num <= 0 || Number.isInteger(num)) {
//         return '';
//     }
//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }


// const obj = {
//     user: 'Bondik',
//     privat: false,
//     data : {
//         name: 'Alex',
//         surname: 'Bondarenko',
//         age: 21
//     }
// };

// console.log(Object.values(obj));

// for (let key in obj) {
//     if(typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj[key]}`);
//     } 
// }

// const str = prompt("Имена", "");
// const nameFriends = str.split(", "); //["Саша", "Витя", "Андрей", "Франц"]
// // console.log(nameFriends.join("; ")); //Саша; Витя; Андрей; Франц
// console.log(nameFriends.sort()); // ["Андрей", "Витя", "Саша", "Франц"]

// const number = [0, 7, 3, 4, 79, 12, 52 ];
// console.log(number.sort()); //[0, 12,  3, 4, 52,  7, 79]
// console.log(number.sort(compareNum)); //[0,  3,  4, 7, 12, 52, 79]

// function compareNum(a, b) {
//     return a - b;
// }

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;

//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
    
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;

//     let result = '';

//     if(programmingLangs === {}) {
//         return '';
//     } else {
//         for(let key in programmingLangs) {
//             result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         }
//     }
//     return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if( arr.length === 0 ) {
//         return "Семья пуста";
//     } else {
//         return `Семья состоит из: ${arr.join(" ")}`;
//     }
    
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     return str.split('').reverse().join('');

//     // let arr = [];
//     // for(let i = 0; i < str.length; i++) {
//     //     arr[i] = str[i];  
//     // }
//     // let arrReverse = arr.reverse();
//     // let result = arrReverse.join('');
//     // return result;
// }
// console.log(reverse(someString));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = 'Доступные валюты:\n';
//     if(arr.length === 0) {
//         return 'Нет доступных валют';
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === missingCurr) {
//             continue;
//         } else {
//             str += `${arr[i]}\n`;
//         }
//     }
//     return str;
// }
// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'RUB'));


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for(let  i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                   b = prompt('На сколько оцените его?', '');
                      
//             if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done!');
//             } else {
//                 console.log('error');
//                 i--;
//             }      
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             alert('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             alert('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             alert('Вы киноман');
//         } else {
//             alert("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function() {
//         // for(let i = 0; i < 3; i++) {
//         //     let genre = prompt(`Ваш любимый жанр под номер ${i + 1}`);
//         //     personalMovieDB.genres[i] = genre;
//         //     if(genre === '' || genre == null) {
//         //         console.log('Вы ввели некоректные данные!');
//         //         i--;
//         //     } else {
//         //         personalMovieDB.genres[i] = genre;
//         //     }
//         // }
//             for(let i = 1; i < 2; i++) {
//                 let genre = prompt(`Напишите ваши любимые жанры через запятую`).toLowerCase();

//                 if(genre === '' || genre == null) {
//                     console.log('Вы ввели некоректные данные!');
//                     i--;
//                 } else {
//                     personalMovieDB.genres = genre.split(', ');
//                     personalMovieDB.genres.sort();
//                 }
//             }

//         return personalMovieDB.genres.forEach((value, index) => {
//             console.log(`Любимый жанр #${index + 1} - это ${value}`);
//         });

        
//     },
//     toggleVisibleMyDB: function() {
//         if(personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     }
// };
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.genres);



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         },
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };
// function isBudgetEnough(data) {
    
//     // Bычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
//     let areaAllShop = [];
//     let areaAllShops;

//     data.shops.map((item, i) => {
//     let arr = Object.values(item);
//     let areaShop = item.width * item.length;
//     areaAllShop[i] = areaShop;
//     });

//     areaAllShops = areaAllShop.reduce((a,b) => {
//         return a + b;
//     });

//     //Bычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
//     let totalVolumeMall = areaAllShops * data.height;

//     // Определение того, хватает ли бюджета на оплату такого объема;
//     let utilityFee = totalVolumeMall * data.moneyPer1m3;

//     if(data.budget > utilityFee) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
// console.log(isBudgetEnough(shoppingMallData));


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0? '-' : rest.join(', ')}`];
// }
// sortStudentsByGroups(students);

// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log(c1, c2, c3);

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     !prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) { 
//     if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[2], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData);

// const btn = document.querySelector('button');
// onclick - Свойство DOM дерева
// btn.onclick = function() { //В реальных проэктах редко используется, лучше переделать в новый формат
//     alert('Click');
// };
// btn.onclick = function() { //В реальных проэктах редко используется, лучше переделать в новый формат
//     alert('Second click');
// // };
// Такой формат не может повторяться , выводит только последний обработчик Second click. 
// Ещё минус после завершения обработки его нельзя удалить автоматически.

// Используем addEventListener(добавляем обработчик события) и removeEventListener(удаляем)
// btn.addEventListener('click', () => {
//     alert('Click');
// });
// // 'click' - Событие, () => {} - Обработчик события
// В этом формате можем назначить сразу несколько действий на одно событие
// btn.addEventListener('click', () => {
//     alert('Second click');
// });
// btn.addEventListener('mouseenter', (e) => { // mouseenter - наведение мыши на элемент
//     console.log(e);
//     e.target.remove(); //Удаляем при наводке нашу кнопку
//     // console.log('Hover');
// });
/* Чтобы узнать что за событие произошло с элементом , что за элемен или координаты 
   используем объект event или e, передаётся как первий аргемент в нашу колбэк функцию 
   Самые важные свойства это type(что за событие) и targget(на каком эл произошло событие)*/

// Выносим отдельно функцию 
// let i = 0;
// const deleteEvent = (e) => {
//     console.log(e.target);
//     i++;
//     if(i == 1) {
//         btn.removeEventListener('click', deleteEvent); //Когда условие выполнится обработчик удалится с этой кнопки
//     }
// };

// btn.addEventListener('click', deleteEvent); //После клика по эл btn, выполнится функция addEventListener
//Всплытие события (не путать с хостиногм)

// const overlay = document.querySelector('.overlay');
/*<div class="overlay">
        <button>Click me</button>
  </div>*/
// const deleteEvent = (e) => {
//     console.log(e.currentTarget); // чаще используется просто targrt
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteEvent);
// overlay.addEventListener('click', deleteEvent);
/* Сначало событие произошло в btn(который вложен в overlay), потом поднялось по иерархии вверх
 и сработало на overlay - это и называется Всплытие событий, когда данное действие срабатывает
 на вложенном элементе и после поднимается на вверх по иерархии нашего DOM дерева*/

//  Отменяем стандартное поведение браузера
// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault(); //Отменяем переход по ссылке, помещаем участок кода в самое начало
//     console.log(event.target);
// });

//3-й аргемент addEventListener , это опции.
// btn.addEventListener('click', deleteEvent, {once: true}); //{once: true} - обработчик будет выполняться один раз

// console.log(document.body); //Всё что в теге <body>...</body>
// console.log(document.documentElement); //Всё что в теге <html>...</html>
// console.log(document.body.childNodes); //Узлы которые являются детьми body 
// NodeList(4) [text, div.wrapper, text, script] - результат console.log
// for(let node of document.body.childNodes) {
//     if(node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }
// Получение первого и последнего элемента в бади
// console.log(document.body.firstElementChild); //<div class="wrapper"></div>
// console.log(document.body.lastElementChild); //<script src="script.js"></script>

// Команды которые позволяют получить соседей, родителей и детей
// console.log(document.querySelector('#current').parentElement);//Получение родителя родителя нашего эллемента)
/*  <div class="wrapper">
        <div class="first">
            <button></button>
            <button id="current"></button>
            <button></button>
        </div>
        <div class="second"></div>
        <div class="third"></div>
    </div>*/

// Задача получить элем след соседа эл после [data-current='3']
// console.log(document.querySelector("[data-current='3']").nextElementSibling);
/*<li>
    ::marker
    "4"
  </li>*/

// Задача получить элем преведущего соседа эл после [data-current='3']
// console.log(document.querySelector("[data-current='3']").previousElementSibling);
/*<li>
    ::marker
    "2"
  </li>*/

// const pow = (x, n)=> {
//     if(n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
    
// };
// console.log(pow(2,6)); //64


// let students = {
//     js : [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],
//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for(let course of Object.values(data)) { //мы получаем значение объекта Object.values()
//         if(Array.isArray(course)) { // Проверка на массив Array.isArray()
//             students += course.length;

//             for(let i = 0; i < course.length; i++){
//                 total += course[i].progress;
//             }
//         } else {
//             for(let subCourse of Object.values(course)) { //мы получаем значение объекта Object.values()
//                 students += subCourse.length;

//                 for(let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
//     return total / students;
// }
// // console.log(getTotalProgressByIteration(students));


// function getTotalProgressByRecursion(data) {
//     if(Array.isArray(data)) { // Проверка на массив Array.isArray()
//         let total = 0;

//         for(let i = 0; i < data.length; i++){
//             total += data[i].progress;
//         }

//         return [total, data.length];

//     } else {
//         let total = [0, 0];

//         for(let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }
// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);


// const sum = (n) => {
//     if(n == 1) {
//         return n;
//     } else {
//        return n + sum(n - 1);
//     }
// };

// console.log(sum(4));

// function factorial(x) {
//     if( !Number.isInteger(x) || typeof(x) !== 'number') {
//         return 'Неверный формат';
//     }
//     if(x >= 1) {
//         return x * factorial(x - 1);
//     } else {
//         return 1;
//     }
// }


// console.log(factorial(6)); //720

// document.addEventListener('DOMContentLoaded',() => { //Для оптимизации
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault(); // Всегда сразу отменяем стандартное поведение браузера во избежание ошибок

//         console.log(e.touches); 
//         /*TouchList {0: Touch, length: 1}
//         0: Touch {identifier: 0, target: div.box, screenX: 275, screenY: 249, clientX: 66, …}
//         length: 1
//         [[Prototype]]: TouchList*/
//     });
// });

// const p = document.querySelectorAll('p');
// console.log(p);



// function loadScript(src){
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);

// }
// loadScript('js/test.js');
// loadScript('js/some.js');

// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     //Если мы хотим определить именно селектор(необьязательно класс, тег атребут и тд)
//     if(box.matches('.this')){ //ищем селктор this
//         console.log(box); //<div class="box this"></div>
//     }
// });
// // Найти первый эл с селектором wrapper который будет у тебя родителем
// console.log(boxes[0].closest('.wrapper')); //<div class="wrapper">...</div>

//Variant 2
//б) С помощью метода созданным в js

// const obj = {
//     name: 'test',
//     [Symbol.for('id')]: 1 //for - сделали Symbol глобальным(лишили уникальности)
// };

// console.log(obj[Symbol.for('id')]); //1


function amountOfPages(summary){
    let result = '';
    for(let i = 1; i <= summary; i++) {
        result += i;
        if(result.length == summary) {
            return i;
        }
    }

}
console.log(amountOfPages(5));