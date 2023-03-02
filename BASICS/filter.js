const people = [
    {name:'bob', age: 20, postion:'developer'},
    {name:'peter', age: 25, postion:'desinger'},
    {name:'susy', age: 30, postion:'the boss'}
]

const youngPeople = people.filter(function(person){
    return person.age <= 25
})
console.log(youngPeople)

console.log('')
console.log('')

const developer = people.filter(function(person){
    return person.postion === 'developer'
})
console.log(developer)