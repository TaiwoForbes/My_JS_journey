const people = [
    {name:'bob', age: 20, postion:'developer', id:1, salary:200},
    {name:'peter', age: 25, postion:'desinger',id:2, salary:700},
    {name:'susy', age: 30, postion:'the boss',id:3, salary:500}
]

const person = people.reduce(function(total,current){
    total += current.salary
    
    return total
},0)

console.log(person)


