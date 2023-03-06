// Вывод односвязного списка

"use strict";

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListCycle(list);
console.log();
printListRecursion(list);

function printListCycle(list) {
  let temp = list;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}
