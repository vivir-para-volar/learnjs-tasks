// Сколько секунд осталось до завтра?

"use strict";

console.log(getSecondsToTomorrow());

function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

// function getSecondsToTomorrow() {
//   return 86400 - getSecondsToday();
// }
// function getSecondsToday() {
//   let date = new Date();
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
