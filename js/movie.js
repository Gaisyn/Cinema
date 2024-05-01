'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один із останіх переглянутих фільмів?', ''),
      b = prompt('На скільки оцінете його', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      console.log('error');
      i--;
    }
  }
}

/* rememberMyFilms(); */

// let i = 0;
// while (i < 2) {
//   const a = prompt('Один із останіх переглянутих фільмів?', ''),
//     b = prompt('На скільки оцінете його', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log('error');
//     i--;
//   }
//   i++;
// }

// do {
//   const a = prompt('Один із останіх переглянутих фільмів?', ''),
//     b = prompt('На скільки оцінете його', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log('error');
//     i--;
//   }
//   i++;
// }
// while (i < 2);

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто доволі мало фільмів");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичнмй глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
  } else {
    console.log("Сталася помилка");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.geners[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
  }
}

writeYourGeners();

