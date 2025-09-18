import types = require("mathjs");

class EmployeeInformation {
        #id: number;

        protected name: string;

        address: string;
    get empId():number{
        return this.#id;
    }
    set empId(id:number){
        this.#id = id;
    }

    
static getEmployeeCount():number{
    return 50;
}

        constructor(id:number, name:string, address:string){
            this.address = address;
            this.#id = id;
            this.name = name;
        }

        getNaneWithAddress() :string{
            return`${this.name}  stays at ${this.#id}`;
        }

        

}
let john = new EmployeeInformation(1, "John", "Batangas Cty");
john.empId = 100;
console.log(john.empId);



EmployeeInformation.getEmployeeCount();

class Manager extends EmployeeInformation{
    constructor(id: number, name:string, address:string){
        super(id, name, address)
    }
     getNaneWithAddress() :string{
            return`${this.name}  stays at ${this.address}`;
        }
}

let mike = new Manager(4, "Mikee", "Hilltop");
console.log(mike.getNaneWithAddress());

let address = john.getNaneWithAddress();

console.log(address);