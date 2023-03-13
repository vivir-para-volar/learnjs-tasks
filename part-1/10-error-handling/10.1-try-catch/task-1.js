// Finally или просто код?

"use strict";

function f() {
  try {
    console.log("try");
    return "result";
  } catch (e) {
    console.log("catch");
  } finally {
    console.log("очистка");
  }
}

f();
