// Хранение отметок "не прочитано"

"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// Cнова прочитаем первое сообщение
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
console.log("Read message 0: " + readMessages.has(messages[0])); // true
console.log("Read message 2: " + readMessages.has(messages[2])); 

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
