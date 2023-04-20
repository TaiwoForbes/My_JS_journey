/* 
    The this keyword is used in a function 
    which refers to the object it belongs to.
    It makes functions reusable by letting you 
    decide the object value.
 */

function sayMyName(name){
    console.log(`my name is ${name}`)
}

// sayMyName('Issa')

const person = {
    name:'Taiwo',
    sayMyName: function(){
        console.log(`my name is ${this.name}`)
    }
}

// person.sayMyName() //This is call explicit binding way of using the this keyword

function sayMyName(){
    console.log(`my name is ${this.name}`)
}
// sayMyName.call(person) //This is call explicit binding way of using the this keyword

function person(name){
    this.name = name
}

const p1 = new person('taiwo')
const p2 = new person('Hissa')
const p3 = new person('Sheyi')

// console.log(p1.name)

