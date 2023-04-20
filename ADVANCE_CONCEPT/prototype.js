/* function Person(Fname,Lname){
    this.firstName = Fname
    this.lastName = Lname
}


Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}


const person1 = new Person('Bruce', 'Wayne') //Constructor
const person2 = new Person('Clark', 'Kent')

console.log(person1.getFullName())
console.log(person2.getFullName())


function SuperHero(Fname, Lname){
    Person.call(this,Fname,Lname)
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function(){
    console.log('fighting crime')
}
SuperHero.prototype = Object.create(Person.prototype)

const Batman = new SuperHero('looki', 'asgardian')
SuperHero.prototype.constructor = SuperHero
console.log(Batman.getFullName())


 */

class Person{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName(){
        return this.firstName + " " + this.lastName
    }
}
class SuperHero extends Person{
    constructor(fName,lName){
        super(fName,lName)
        this.IsSuperHero = true
    }
}
const person1 = new SuperHero('Bruce', 'Wayne')
console.log(person1.IsSuperHero)