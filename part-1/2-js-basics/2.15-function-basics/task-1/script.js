// Перепишите функцию, используя оператор '?' или '||'

"use strict";

checkAge(21);
checkAgeWithOr(17);

// Используя оператор ?
function checkAge(age) {
  return (age > 18) ? true : confirm("Родители разрешили?");
}

// Используя оператор ||
function checkAgeWithOr(age) {
  return (age > 18) || confirm("Родители разрешили?");
}
