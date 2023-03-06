// Армия функций

"use strict";

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let index = i;
    let shooter = function () {
      console.log(index); // должна выводить порядковый номер
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); 
army[5](); 
