// Basic class in js for the way
class Person {
    static scopes = 0;
    static get getScopes() {
        console.log(`My total scopes is ${Person.scopes}`);
    }

    name = "";
    age = "";

    constructor(name, age) {
        this.name = name;
        this.age = age;

        Person.scopes++;
    }

    set setName(newName) {
        this.name = newName;
    }

    get getName() {
        console.log(`My name is ${this.name}`);
    }
}

//Examples
const juanito = new Person("juanito", 22);
const pedrito = new Person("Pedrito", 30);
juanito.setName = "Juanito GC";
juanito.getName;

Person.getScopes;
