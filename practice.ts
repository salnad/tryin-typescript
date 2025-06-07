type Person = {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; 

const person: Person = {
    name: "John",
    age: 30,
}

type PP = PersonKeys;

console.log(person.name);