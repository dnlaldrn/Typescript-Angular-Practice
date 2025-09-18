interface Shape{
    getArea():number;
    toString(): string;
}

class Rectangle implements Shape {
   
 public constructor(protected readonly width : number, protected readonly height: number) {
    this.width = width;
    this.height = height
    
 }
 public getArea(){
    return this.width * this.height;

    
 }
   public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
    
}
class Square extends Rectangle {
    public constructor (width:number){
        super(width, width);

    }
    public override toString(): string {
        return `Square: ${this.getArea()}`;
    }
}

let hshb = new Square(21)
console.log(hshb.toString());
