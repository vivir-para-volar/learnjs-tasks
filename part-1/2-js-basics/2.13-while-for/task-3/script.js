// Повторять цикл, пока ввод неверен

"use strict";

let number;
do {
  number = prompt("Введите число больше 100", 0);
} while (number <= 100 && number);
