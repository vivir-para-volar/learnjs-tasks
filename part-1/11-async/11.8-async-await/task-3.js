// Вызовите async–функцию из "обычной"

"use strict";

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(console.log);
}

f();
