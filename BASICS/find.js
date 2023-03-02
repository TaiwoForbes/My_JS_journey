const people = [
    {name:'bob', age: 20, postion:'developer', id:1},
    {name:'peter', age: 25, postion:'desinger',id:2},
    {name:'susy', age: 30, postion:'the boss',id:3}
]
const names = ['bob', 'peter']
console.log(names.find(function(person){
    return person === 'bob'
}))

const person = people.find(function(person){
    return person.id === 3
})
console.log(person)
