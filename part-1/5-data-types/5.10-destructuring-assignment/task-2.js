// Максимальная зарплата

"use strict";

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));

function topSalary(salaries) {
  let maxSalary = -1;
  let nameWithMaxSalary = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      nameWithMaxSalary = name;
    }
  }

  return nameWithMaxSalary;
}
