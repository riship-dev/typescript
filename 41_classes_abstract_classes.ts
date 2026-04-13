const print: Function = console.log;

class Person {
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    greet() {
        print(`Hello, I'm ${this.name}`);
    }
}

const person_1: Person = new Person("John Doe");
//print(person_1.name) // can't access
person_1.greet()

// Abstract class is a restricted class that cannot be used to create objects and designed to be specifically used as a base class
abstract class Animal{
    move(){
        console.log("Moving")
    }
}
//const animal = new Animal; // can't create