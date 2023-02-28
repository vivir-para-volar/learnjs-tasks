// Скопировать и отсортировать массив

"use strict";

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  return arr.slice().sort();
}
