class Square{
    constructor(width){
        this.width = width
        this.height = width
    }

    static equals(a,b){
        return a + b
    }
}

let square1 = new Square(8)
let square2 = new Square(8)
console.log(square1);

console.log(Square.equals(1,2))