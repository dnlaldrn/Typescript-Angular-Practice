function add(num1:number, num2:number, num3? :number): number{
    return num3? num1 + num2 + num3 : num1+num2;
}

console.log(add(10,30));
console.log(add(10,30,12));


const sub = (num1:number, num2:number):number =>{
    return num1-num2;

}
console.log(sub(10,30));

function add2(num1:number, num2:number, ...num3:number[]){
    return num1+ num2 + num3.reduce((a, b)=> a+b, 0);
}


console.log(add2(2,3,4,5,6,7,8,9,10));

