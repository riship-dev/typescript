const print: Function = console.log

// number
let x: number = 2; // explicit type setting
let y = 3; // implicit type setting
print(x, y);

// string
let a: string = "hello, world";
print(a);

// boolean
let b: boolean;
b = true;
print(b);

// null: use null when you want to explicitly define something as empty or non-existent
let c = null;

// undefined: used as a placeholder that means a variable has been declared but has not het been assigned a value
let d = undefined;
let e: undefined | number = undefined; // use an union if you want to use explicit type setting with undefined
e = 45
print(e)

// void: use when returning nothing in a function

// never: used to explicitly define that a function never returns