// Почему наедаются оба хомяка?

"use strict";

let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

speedy.eat("apple");
speedy.eat("hazelnut");
console.log(speedy.stomach); // apple, hazelnut

lazy.eat("carrot");
console.log(lazy.stomach); // carrot
