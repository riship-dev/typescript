function sum(...numbers: number[]){} // rest parameter

// overloaded function
function get_item_length(name: string): number;
function get_item_length(names: string[]): number;
// this function can handle above to functions
function get_item_length(name_or_names: unknown): number{
    if (typeof name_or_names === "string") {
        return name_or_names.length;
    } else if (Array.isArray(name_or_names)) {
        return name_or_names.length;
    }
    return 0;
}

console.log(get_item_length("John Doe"));
console.log(get_item_length(["John Doe", "Jane Smith"]));