// Сколько сегодня прошло секунд?

"use strict";

console.log(getSecondsToday());

function getSecondsToday() {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let diff = (Date.now() - today) / 1000;
  return Math.round(diff);
}

// function getSecondsToday() {
//   let d = new Date();
//   return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }
