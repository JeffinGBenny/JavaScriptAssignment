"use strict";
function computeAverage(arr, mapFunction) {
    if (arr.length === 0) {
        return 0; // Return 0 for an empty array, you can choose another default value if needed.
    }
    const mappedValues = arr.map(mapFunction); // Map each element to a numeric value
    const sum = mappedValues.reduce((acc, val) => acc + val, 0); // Calculate the sum of the mapped values
    const average = sum / arr.length; // Calculate the average
    return average;
}
// Example usage:
const numbers1 = [1, 2, 3, 4, 5];
// Define a mapping function, e.g., square each number before averaging
const squareMapping = (num) => num * num;
const average = computeAverage(numbers1, squareMapping);
console.log(average);
