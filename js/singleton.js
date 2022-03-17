class Singleton {
    static masterScope;
    name;

    constructor(name) {
        if (!!Singleton.masterScope) {
            return Singleton.masterScope;
        }

        Singleton.masterScope = this;
        this.name = name;
    }
}

const instance1 = new Singleton("Jose");
const instance2 = new Singleton("Sofi");
const instance3 = new Singleton("Juan");

console.log(`Instance1 name ${instance1.name}`);
console.log(`Instance2 name ${instance2.name}`);
console.log(`Instance3 name ${instance3.name}`);
