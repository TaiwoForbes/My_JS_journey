const number = 1
let number2 = number
number2 = 7
console.log(number)
console.log(number2)


let person = {name:'bob'}
let person2 = person
person2.name = 'susy'
console.log(person.name)
console.log(person2.name)


/* Adding truthy and falsy to this section */
const bool1 = true
const bool2 = 2 > 1
if (true) {
    console.log('Hey, it works')
}
if (2 > 1){
    console.log('Hey it also works')
}