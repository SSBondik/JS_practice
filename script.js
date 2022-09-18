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
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
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
// // rememberMyFilms();


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
// calculateVolumeAndArea(8);


function getCoupeNumber(room) {
if(typeof(room) !== 'number' || !Number.isInteger(room) || room < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
}
if (room === 0 || room > 36) {
    return "Таких мест в вагоне не существует";
}
return Math.ceil(room / 4);
}
