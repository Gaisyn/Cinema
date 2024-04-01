'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false
};
const a = prompt('Один із останіх переглянутих фільмів?', ''),
  b = prompt('На скільки оцінете його', ''),
  c = prompt('Один із останіх переглянутих фільмів?', ''),
  d = prompt('На скільки оцінете його', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);