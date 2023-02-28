// Усечение строки

"use strict";

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + "…";
}
