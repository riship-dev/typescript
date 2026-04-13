const print: Function = console.log;

function add(x: number, y: number): number{ return x + y; }

print(add(3, 4));

// optional parameter using ?, default parameter for last name
function make_name(first_name: string, last_name: string = "Doe", middle_name?: string): string {
    if (middle_name) return `${first_name} ${middle_name} ${last_name}`;
    return `${first_name} ${last_name}`;
}

print(make_name("Rishi", "P"));
print(make_name("John", "Doe", "Middle"));

// function as parameter
function call_function(
    func: (f: string, l: string, m?:string) => string, 
    parameter_1: string, 
    parameter_2: string,
    parameter_3?: string
): string {
    if (parameter_3) return func(parameter_1, parameter_2, parameter_3);
    return func(parameter_1, parameter_2)
}
print(call_function(make_name, "jane", "smith"));
print(call_function(make_name, "jane", "smith", "middle"));

// multiple functions as parameters 
function multiply(x: number, y: number): number {
    return x * y;
}
function divide(x: number, y: number): number{
    return x / y;
}

function apply_functions(
    functions: ((x: number, y: number) => number)[], 
    values: [number, number][]
): number[]{
    let result: number[] = []; 
    
    result.push(functions[0]!(values[0]![0], values[0]![1]));
    result.push(functions[1]!(values[1]![0], values[1]![1]));
    
    return result;
}

print(apply_functions(
    [multiply, divide], 
    [
        [3, 4], 
        [25, 5]
    ]
));