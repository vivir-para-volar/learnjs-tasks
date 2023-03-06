// Вывод односвязного списка в обратном порядке

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

printReverseListCycle(list);
console.log();
printReverseListRecursion(list);

function printReverseListCycle(list) {
  let temp = list;
  let arr = [];

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  arr.reverse().forEach((value) => console.log(value));
}

function printReverseListRecursion(list) {
  if (list.next) {
    printReverseListRecursion(list.next);
  }

  console.log(list.value);
}
