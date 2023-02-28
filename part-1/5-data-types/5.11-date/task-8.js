// Форматирование относительной даты

"use strict";

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000))); // например 31.12.16 10:00

function formatDate(date) {
  let diff = Date.now() - date.getTime();

  if (diff < 1000) return `прямо сейчас`;
  if ((diff /= 1000) < 60) return `${diff} сек. назад`;
  if ((diff /= 60) < 60) return `${diff} мин. назад`;

  let newFormat = [
    "0" + date.getDate(),
    "0" + (date.getMonth() + 1),
    "" + date.getFullYear(),
    "0" + date.getHours(),
    "0" + date.getMinutes(),
  ].map((item) => item.slice(-2));

  return newFormat.slice(0, 3).join(".") + " " + newFormat.slice(3).join(":");
}
