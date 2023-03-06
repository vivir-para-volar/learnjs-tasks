// Сумма с помощью замыканий

"use strict";

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

function sum(a) {
  return (b) => a + b;
}
