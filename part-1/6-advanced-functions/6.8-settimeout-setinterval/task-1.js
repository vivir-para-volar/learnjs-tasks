// Вывод каждую секунду

"use strict";

printNumbersWithSetInterval(1, 3);
setTimeout(printNumbersWithSetTimeout, 4000, 15, 18);

function printNumbersWithSetInterval(from, to) {
  let count = from;

  let timerId = setInterval(function () {
    count <= to ? console.log(count++) : clearInterval(timerId);
  }, 1000);
}

function printNumbersWithSetTimeout(from, to) {
  let count = from;

  setTimeout(function tick() {
    if (count <= to) {
      console.log(count++);
      setTimeout(tick, 1000);
    }
  }, 1000);
}
