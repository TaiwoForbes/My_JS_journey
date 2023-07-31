// Destructuring works with Object and Array dataTypes

// Accessing Objects the Old way

const person = {
    id: 1,
    firstName: "Issa",
    lastName: "Soyemi"
}
console.log(person.firstName, person.lastName)

// Accessing Objects the New way

// let {firstName,lastName} = person
// console.log(firstName,lastName)

// We can also rename a variable using the new way

/* let {firstName:fName, lastName:lName} = person
console.log(fName,lName)
 */

let {firstName,middleName = 'Taiwo',lastName} = person
console.log(middleName)


// Accessing Arrays the New way
const arr = [1,2,3]
let [x,y,z] = arr
console.log(x,y,z);

let [a,b,c,d] = [2,5,7,8]
console.log(a,b,c,d)

// Skipping a value
const skipArr = ['one', 'two', 'three']
let[g,,j] = skipArr
console.log(g,j)

// Using the spread operator
const names = ['Taiwo', 'Bisi', 'Tunde']
const [f,...l] = names
console.log(l)

let{id, ...rest} = person //NOTE: The spread has to be the last variable
console.log(id,rest)


// using destructuring with function

function getPerson(){
    return null;

     /* {
        firstNam : "taiwo",
        lastNam : "forbes"

    } */
}

let {firstNam, lastNam} = getPerson() || {}

console.log(firstNam,lastNam)

// destructuring nested object

let member = {
    i: 01,
    name: {
        fn: "Taiwo",
        ln: 'Forbes'
    }
}

let {i, name:{fn,ln},name} = member
console.log(i,fn,ln,name)