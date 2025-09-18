
import type { User, Login } from "./interface";

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class EmployeeInformation implements Login {
    #id: number;

    protected name: string;

    address: Address;




    get empId(): number {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }


    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    Login(): User{
        return { name: "Johm",
    id: 1,
    email: ""}
    }

    getNaneWithAddress(): string {
        return `${this.name}  stays at ${this.#id}`;
    }



}
let john = new EmployeeInformation(1, "John", {
    street: "Hfsf",
    city: "nfjhfiusf",
    state: "mfksfis",
    pin: "1234",

});
john.empId = 100;
console.log(john.empId);



EmployeeInformation.getEmployeeCount();

class Manager extends EmployeeInformation {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }
    getNaneWithAddress(): string {
        return `${this.name}  stays at ${this.address.state}`;
    }
}

let mike = new Manager(4, "Mikee", {
    street: "Hfsf",
    city: "nfjhfiusf",
    state: "mfksfis",
    pin: "1234",
});
console.log(mike.getNaneWithAddress());

let address = john.getNaneWithAddress();

console.log(address);