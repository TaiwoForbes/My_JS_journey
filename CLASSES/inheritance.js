class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    describe(){
        console.log(`I am ${this.name} and ${this.age} years old`)
    }
}

class Programmers extends Person{
    constructor(name,age,exp){
        super(name,age)
        this.exp = exp
    }

    code(){
        console.log(`${this.name} is coding`)
    }
}

const programs = [   
    new Programmers('Tunde', 45, 9),
    new Programmers('Jeff', 45, 9)
]

function  program(input){
    input.forEach(element => {
        element.code()
    });
}

program(programs)