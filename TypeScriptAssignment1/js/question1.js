"use strict";
function numberToDigitsArray(num) {
    // Convert the number to a string
    const numStr = num.toString();
    // Split the string into an array of characters
    const digitsArray = numStr.split('').map(Number);
    return digitsArray;
}
const number = 12345;
const digits = numberToDigitsArray(number);
console.log(digits);
