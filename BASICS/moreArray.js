// Arrays and for loop

const name = ['anna', 'susy', 'bob']
const lastName = 'shakesandbake'
let newArray = []
i = 0
for(i;i < name.length;i++){
    newArray.push(`${name[i]} ${lastName}`)
    console.log(newArray[i])
};

console.log("")
console.log("")
console.log("")


const people = [
    {name:'bob', age: 20, postion:'developer'},
    {name:'peter', age: 25, postion:'desinger'},
    {name:'susy', age: 30, postion:'the boss'}
]
function showItem(person){
    console.log(person.postion)
}

// people.forEach(showItem)

people.forEach(function(item){
    console.log(item.postion)
})
