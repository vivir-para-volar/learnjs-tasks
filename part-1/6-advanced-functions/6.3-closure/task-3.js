// Сортировать по полю

"use strict";

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField("name")); // по имени (Ann, John, Pete)
console.log(users);

users.sort(byField("age")); // по возрасту (Pete, Ann, John)
console.log(users);

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
