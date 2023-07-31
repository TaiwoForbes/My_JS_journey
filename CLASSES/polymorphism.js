class Animal{
    constructor(name){
        this.name = name
    }

    makeSound(){
        console.log('Animal Sounds')
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    makeSound(){
        console.log('Woof! Woof! Woof!')
    }
}

const a1 = new Animal('Dog')
a1.makeSound()

const a2 = new Dog('Jeff')
a2.makeSound()