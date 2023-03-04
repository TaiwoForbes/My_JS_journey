/* localStorage.setItem('name', 'john')
sessionStorage.setItem('name', 'john') */

/* localStorage.setItem('name', 'john')
localStorage.setItem('food', 'rice')
localStorage.setItem('color', 'red')
localStorage.setItem('school', 'unilag')

const name = localStorage.getItem('name')
console.log(name)

localStorage.removeItem('name')

localStorage.clear() */

/* JSON */

const friends = ['john', 'peter', 'bob']

localStorage.setItem('friends', JSON.stringify(friends))

const values = JSON.parse(localStorage.getItem('friends'))
console.log(values[2])

let fruits

if(localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'))
}
else{
    fruits = []
}

console.log(fruits)

fruits.push('apple')
localStorage.setItem('fruits', JSON.stringify(fruits))

