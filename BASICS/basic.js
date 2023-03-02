/* DATA-TYPES */

/* Stings */
let name = 'Taiwo';
let address, zip, state;
address = '10,ayonuga street';
zip = "60612";
state = "LS";

names = 'Issa';
console.log(address, zip, state);
console.log(names);

var value = "Taiwo";
console.log(value)


/* integers */
const num = 34;
const num2 = 32
console.log(num + num2)
console.log(num - num2)
console.log(num * num2)
console.log(num / num2)
console.log(num % num2)

/* OPERATORS */
let number = 40;
number += 5
console.log(number)

console.log(typeof number)

/* ARRAYS */
const friend1 = 'anna'
const friend2 = 'anna'
const friend3 = 'anna'
const friend4 = 'anna'
const friends = ['anna', 'tunji', 'mayokuun'];
console.log(friends)

/* FUNCTION */
const wallHeight = 80

function calculate(value) {
    console.log('The value in cm is:' + value * 2.54)
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height]
console.log(dimensions)

/* function expression */
const add = function addvalue(num1, num2) {
    return num1 + num2;
};
const result = add(1, 2)
console.log(result)

/* Arrow function */
const multiply = (num1, num2) => num1 * num2;

/* OBJECTS */
const person = {
    name: 'John',
    lastName: "peters",
    age: 40,
    education: true,
    siblings: ['anna', 'susan,', 'peter'],
    greetings: function greeting() {
        console.log('hello')
    }
}
console.log(person.siblings[0])
person.greetings()

/* CONDTIONAL STATEMENT */
const number1 = 6
const number2 = 6

const value1 = false;
if (!value1) {
    console.log('yes')
}

/* SWITCH STATEMENT */
const dice = 2;

switch (dice) {
    case 1:
        console.log('you got one')
        break
    case 2:
        console.log('you got two')
        break
    case 3:
        console.log('you got three')
        break
    default:
        if (dice < 1 || dice > 6) {
            console.log('wrong value')
        }
}

/* LOOPS */
let i;
for(i=0;i<10;i++){
    console.log(i)
}

