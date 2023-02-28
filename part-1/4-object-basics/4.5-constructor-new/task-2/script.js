// Создайте калькулятор при помощи конструктора, new Calculator

"use strict";

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите 1 число", 0);
    this.b = +prompt("Введите 2 число", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}
