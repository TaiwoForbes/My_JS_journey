class Square{
    constructor(_width){
        this.width = _width
        this.numberOfReq = 0
        
    }

    area(){
        this.numberOfReq ++
        return this.width * this.width
    }


    /* set area(area){
        this.width= Math.sqrt(area)
    } */
}


let square1 = new Square(25)
console.log(square1.area())
console.log(square1.area())
console.log(square1.area())
console.log(square1.area())
console.log(square1.area())

console.log(square1.numberOfReq);