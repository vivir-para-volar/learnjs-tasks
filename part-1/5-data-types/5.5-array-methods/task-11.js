// Получить средний возраст

"use strict";

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users) {
    return arr.reduce((sum, user) => sum + user.age, 0) / users.length;
}
