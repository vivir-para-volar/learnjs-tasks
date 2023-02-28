// Хранение времени прочтения

"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakMap();

// Два сообщения были прочитаны
readMessages.set(messages[0], new Date(2023, 1, 1));
readMessages.set(messages[1], new Date(2023, 2, 1));
// readMessages содержит 2 элемента

// Cнова прочитаем первое сообщение
readMessages.set(messages[0], new Date(2023, 1, 9));
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
console.log("Read message 0: " + readMessages.get(messages[0])); 
console.log("Read message 1: " + readMessages.get(messages[1]));
console.log("Read message 2: " + readMessages.has(messages[2])); 

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
