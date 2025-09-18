"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("mathjs");
class EmployeeInformation {
    #id;
    name;
    address;
    get empId() {
        return this.#id;
    }
    set empId(id) {
        this.#id = id;
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    getNaneWithAddress() {
        return `${this.name}  stays at ${this.#id}`;
    }
}
let john = new EmployeeInformation(1, "John", "Batangas Cty");
john.empId = 100;
console.log(john.empId);
EmployeeInformation.getEmployeeCount();
class Manager extends EmployeeInformation {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNaneWithAddress() {
        return `${this.name}  stays at ${this.address}`;
    }
}
let mike = new Manager(4, "Mikee", "Hilltop");
console.log(mike.getNaneWithAddress());
let address = john.getNaneWithAddress();
console.log(address);
//# sourceMappingURL=class.js.map