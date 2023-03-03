// Traverse the DOM

// Parent Node Traversal

/* let ul = document.querySelector('ul')
console.log(ul.parentNode.parentNode)
console.log(ul.parentElement.parentElement)

const html = document.documentElement
console.log(html.parentNode) */

// Child Node Traversal

let ul = document.querySelector('ul')
/* console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)

ul.childNodes[1].style.backgroundColor = 'blue' */

/* console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
 */

// Siblings 

console.log(ul.previousSibling) //This will return a text node
console.log(ul.nextSibling) //This will also return a text node
console.log(ul.nextElementSibling)
console.log(ul.previousElementSibling)





