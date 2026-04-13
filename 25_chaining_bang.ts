// question mark & exclamation point: operators allows us to check and deal with undefined values within TypeScript

const a = [
    {name: "tim"},
    {name: "joe"},
    {name: "jane"}
];

let element = a.pop()?.name; // if undefined, let it be undefined. keep going if not undefined
console.log(element);
element = a.pop()!.name; // assume not undefined
console.log(element);