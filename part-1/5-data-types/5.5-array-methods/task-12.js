// Оставить уникальные элементы массива

"use strict";

function unique(arr) {
  let arrResult = [];

  for (var item of arr) {
    if (!arrResult.includes(item)) {
      arrResult.push(item);
    }
  }

  return arrResult;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
