function allTrue<T>(collection: T[], predicate: (item: T) => boolean): boolean {
    return collection.every(item => predicate(item));
}

// Example usage:
const numbers: number[] = [2, 4, 6, 8, 10];
const isEven = (x: number): boolean => x % 2 === 0;

const result: boolean = allTrue(numbers, isEven);
console.log(result); 