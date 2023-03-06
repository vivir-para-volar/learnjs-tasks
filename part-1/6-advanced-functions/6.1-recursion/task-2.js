// Вычислить факториал

"use strict";

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}
