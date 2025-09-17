let name :  string;

name = "Daniel";

let newname = name.toUpperCase();

console.log(newname)

let age: number;

age = 20;
age = 25.5;

console.log(age)

let numlist :Array<number>;
numlist = [2,3,5,1,6,7]

let result = numlist.filter((num)=> num>2)
console.log(result)

let sum = numlist.reduce((acc, num) => acc + num);

console.log(sum)

enum Color{
    Red,
    Greem,
    Blue
}
let c: Color = Color.Blue;