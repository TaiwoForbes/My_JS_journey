class Rectangle{
    constructor(_width,_height){
        this.width = _width
        this.height = _height
    }

    getArea(){
        return this.width * this.height
    } 

    printDesc(){
        console.log(`I'm a Triangle with ${this.width} X ${this.height} = ${this.getArea()} `)
    }
}

let Rectangle1 = new Rectangle(5,6)

Rectangle1.printDesc()