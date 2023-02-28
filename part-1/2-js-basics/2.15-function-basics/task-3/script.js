// Функция pow(x,n)

"use strict";

function pow(x, n) {
  if (n < 1 || n % 1 !== 0) {
    return `Используйте натуральное число для степени`;
  }
  return x ** n;
}

let x = +prompt("Введите x", "");
let n = +prompt("Введите n", "");
alert(pow(x, n));
