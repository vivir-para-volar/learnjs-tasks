// Создать расширяемый калькулятор

"use strict";

let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

function Calculator() {
  this.operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let arr = str.split(" ");

    let a = +arr[0], b = +arr[2];
    let operator = arr[1];

    if (!this.operations[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.operations[operator](a, b);
  };

  this.addMethod = function (name, func) {
    this.operations[name] = func;
  };
}
