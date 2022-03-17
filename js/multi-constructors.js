class Multi {
    static byObject({ name, lastname }) {
        return new Multi(name, lastname);
    }

    name = "without Name";
    lastname = "without Lastname";

    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    getInfo() {
        console.log(`My name is ${this.name} and my lastname is ${this.lastname}`);
    }
}

const multi1 = new Multi("Jose", "Gregorio");
multi1.getInfo();

let obj = {
    name: "Juan",
    lastname: "Calderon",
};
const onlyName = Multi.byObject(obj);
onlyName.getInfo();
