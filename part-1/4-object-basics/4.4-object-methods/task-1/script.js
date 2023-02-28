// Создайте калькулятор

"use strict";

let calculator = {
  read() {
    this.a = +prompt("Введите 1 число", 0);
    this.b = +prompt("Введите 2 число", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
