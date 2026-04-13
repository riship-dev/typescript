const print: Function = console.log;

// arrays
let a = [1, 2, 3, "hello"]; // store any type
let b: number[] = [1, 2, 3]; // store only specified type

let c: number[][] = [[1, 2], [3, 4]]; // 2D array with specified type

// tuples
const d: [number, string] = [1, "2"];
const e: [number, number][] = [
    [1, 2],
    [-1, 3]
];
print(e);
console.log(e[0]![0]);