const people = [
    {name:'bob', age: 20, postion:'developer'},
    {name:'peter', age: 25, postion:'desinger'},
    {name:'susy', age: 30, postion:'the boss'}
]

const ages = people.map(function(person){
    return person.age
})
const newPeople = people.map(function(person){
    return {
        firstname:person.name,
        oldAge: person.age + 20
    }
})
console.log(ages)
console.log(newPeople)



const names = people.map(function(person){
    return `<h1>${person.name}</h1>`
})

document.body.innerHTML = names.join('')
console.log(names)
