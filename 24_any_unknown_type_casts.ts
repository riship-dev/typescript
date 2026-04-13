const print: Function = console.log;

// any type: allows for flexible typing but sacrifices type safety as it lacks compile-time type checking
let a: any = 1;

// unknown type: is a type safe counterpart to the "any type"
let b: unknown = 1;
if (typeof b == "number"){ const result = b + 1 } // assert type before performing operation
const result = (b as number) + 1; // type casting for performing operations
print(result)