// Перепишите, используя async/await

"use strict";

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

loadJson("no-such-user.json").catch(alert); // Error: 404
