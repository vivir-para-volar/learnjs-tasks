// Сумма с произвольным количеством скобок

"use strict";

console.log(sum(1)(2).toString()); // 3
console.log(sum(1)(2)(3).toString()); // 6
console.log(sum(5)(-1)(2).toString()); // 6
console.log(sum(6)(-1)(-2)(-3).toString()); // 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15

function sum(a) {
  let currentSum = a;

  function fun(b) {
    currentSum += b;
    return fun;
  }

  fun.toString = function () {
    return currentSum;
  };

  return fun;
}
