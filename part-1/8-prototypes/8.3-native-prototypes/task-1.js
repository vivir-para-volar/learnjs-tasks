// Добавить функциям метод "f.defer(ms)"

"use strict";

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
