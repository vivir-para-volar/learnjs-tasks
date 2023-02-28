// Случайное целое число от min до max

"use strict";

for (let i = 0; i < 10; i++) {
  console.log(randomInteger(1, 5));
}

function randomInteger(min, max) {
  let num = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(num);
}
