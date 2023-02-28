// Сумма введённых чисел

"use strict";

alert(sumInput());

function sumInput() {
  let numbers = [];

  while (true) {
    let num = prompt("Введите число", 0);

    if (num === null || num === "" || !isFinite(num)) break;

    numbers.push(+num);
  }

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
