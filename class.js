class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    toString() {
        return `Square: ${this.getArea()}`;
    }
}
let hshb = new Square(21);
console.log(hshb.toString());
export {};
//# sourceMappingURL=class.js.map