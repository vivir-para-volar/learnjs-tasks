// Вычислить сумму чисел до данного

"use strict";

console.log(sumToCycle(1)); // 1
console.log(sumToCycle(2)); // 3
console.log(sumToCycle(3)); // 6
console.log(sumToCycle(4)); // 10
console.log(sumToCycle(100)); // 5050

function sumToCycle(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToRecursion(1)); // 1
console.log(sumToRecursion(2)); // 3
console.log(sumToRecursion(3)); // 6
console.log(sumToRecursion(4)); // 10
console.log(sumToRecursion(100)); // 5050

function sumToRecursion(n) {
  return n === 1 ? 1 : n + sumToRecursion(n - 1);
}

console.log(sumTo(1)); // 1
console.log(sumTo(2)); // 3
console.log(sumTo(3)); // 6
console.log(sumTo(4)); // 10
console.log(sumTo(100)); // 5050

function sumTo(n) {
  return (n * (n + 1)) / 2;
}
