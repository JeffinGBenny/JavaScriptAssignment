function numberToDigitsArray(num: number): number[] {
    // Convert the number to a string
    const numStr: string = num.toString();
  
    // Split the string into an array of characters
    const digitsArray: number[] = numStr.split('').map(Number);
  
    return digitsArray;
  }

const number = 12345;
const digits = numberToDigitsArray(number);
console.log(digits);