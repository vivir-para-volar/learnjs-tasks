// Сделать первый символ заглавным

"use strict";

console.log(ucFirst("вася"));

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
