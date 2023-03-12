// Создайте новый объект с помощью уже существующего

"use strict";

// Корректно сработает
function Fun() {
  this.property = false;
}
Fun.prototype.property = false;

let obj = new Fun();
let obj2 = new obj.constructor();

console.log(obj2.constructor === Fun); // true
console.log(obj2.property); // false

// Поведёт себя неправильно
function Fun2() {
  this.property = false;
}
Fun2.prototype = {};

let obj3 = new Fun2();
let obj4 = new obj3.constructor();

console.log(obj4.constructor === Fun2); // false
console.log(obj4.property); // undefined
