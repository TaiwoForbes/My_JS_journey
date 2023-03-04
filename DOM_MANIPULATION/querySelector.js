const result = document.querySelector('#result')
result.style.backgroundColor = 'blue'
/* Selecting the children */
const children = result.children
console.log(children[1])
console.log('')
console.log('')
/* Parent Element */
const heading = document.querySelector('h3')
const parent = heading.parentElement.style.color = 'red'

console.log('')
console.log('')
const item = document.querySelector('.special')

/* Previous Siblings ----> This will return a white space*/
// Add another nextsibling method inorder to avoid the white space issue.
const first = document.querySelector('.first')
const second = first.nextSibling.nextSibling.style.color = 'green'
console.log(second)


/* Next Siblings */
const last = document.querySelector('#last')
const third = last.previousSibling.previousSibling
console.log(`This is ${third}`)

/* Previous Element Siblings */
const last2 = document.querySelector('#last')
last.nextElementSibling.style.color = 'red'


/* Node Value */
// Both will accomplish the same thing
const object = document.getElementById('cool')
const Value = item.firstChild.nodeValue
const easyValue = object.textContent
console.log(Value)
console.log(easyValue)


const lastItem = document.querySelector('li:last-child')
console.log(lastItem)

const list = document.querySelectorAll('.special')

list.forEach(function(item){
    console.log(item)
    item.style.color = 'yellow'
})


