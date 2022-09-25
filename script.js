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


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Takesi'];

function sortStudentsByGroups(arr) {
    arr.sort();
    
}
console.log(sortStudentsByGroups(students));

