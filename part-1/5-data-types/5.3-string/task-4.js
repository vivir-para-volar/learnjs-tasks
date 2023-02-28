// Выделить число

"use strict";

console.log(extractCurrencyValue('$120') === 120);

function extractCurrencyValue(str) {
    return +str.slice(1);
}
