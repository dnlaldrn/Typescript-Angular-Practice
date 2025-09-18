import type ts = require("typescript");


export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}


interface EmployeeInformation extends User{
    salary:number;

}
let employee: EmployeeInformation = {
    name: "Johm",
    id: 4,
    email: "",
    salary: 1000
}

export interface Login {
    Login():User;
}


