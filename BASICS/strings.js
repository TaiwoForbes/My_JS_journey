let text = ' Peter Jordan'

let result = text.length

console.log(result)

console.log(text.toLowerCase())
console.log(text.toUpperCase())
console.log(text.charAt(text.length-1))
console.log(text.indexOf('P'))
console.log(text.trim())
console.log(text.startsWith(' Peter'))
console.log(text.includes('ter'))

/* Template Literals */
const name = 'john'
const age = 25
const sentence = "Hey it's " + name + ' and he is' + age

const value =`Hey it's ${name} and he is ${age} years old`
console.log(value)