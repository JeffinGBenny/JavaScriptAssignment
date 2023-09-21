"use strict";
function allTrue(collection, predicate) {
    return collection.every(item => predicate(item));
}
// Example usage:
const numbers = [2, 4, 6, 8, 10];
const isEven = (x) => x % 2 === 0;
const result = allTrue(numbers, isEven);
console.log(result);
