// literal: is a textual representation (notation) of a value as it is written in source code
const print: Function = console.log

let direction: "north" | "south" | "east" | "west"; // can only assign one of the four to direction
//direction = "abc"; // error
direction = "north";
print(direction);

let response: 200 | 404 | 201;
response = 200;

// enum: enables developers to establish a collection of named constants (enumerators), each linked with an integer value
// numeric enums
enum Size{
    Small,
    Medium,
    Large
}

var size: Size = Size.Small;

if (size === Size.Small) print("hello")

// string enums
enum Direction{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "Right"
}