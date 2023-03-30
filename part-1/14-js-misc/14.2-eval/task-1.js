// Eval-калькулятор

"use strict";

function Calculator(expression) {
  return eval(expression);
}

console.log(Calculator("2+2"));
console.log(Calculator("2+2*2"));
console.log(Calculator("0*8"));
console.log(Calculator("16/2"));
