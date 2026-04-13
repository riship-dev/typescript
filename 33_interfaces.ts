interface Person {
    name: string,
    age: number,
    height?: number, // optional
    hello: () => void
}
interface Employee extends Person {
    employee_id: number
}

const person: Employee = {
    name: "tim",
    age: 23,
    hello: function() {
        console.log(`${this.name} says hi`)
    },
    employee_id: 2321
}

person.hello()