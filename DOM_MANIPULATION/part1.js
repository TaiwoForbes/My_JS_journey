// DOM Manpulation

/* 
// GetElementById()
const title = document.getElementById('main-heading')

// GetElementByClassName()

const listItem = document.getElementsByClassName('list-items')

// GetElementByTagName()
const list = document.getElementsByTagName('li')

// querySlector()
const container = document.querySelector('.container')
console.log(container)

// querySelectorAll()
const containers = document.querySelectorAll('.container')
console.log(containers) */

const title = document.querySelector('#main-heading')
title.style.color = 'red'

const list = document.querySelectorAll('.list-items')
list.forEach(function(items){
    items.style.color = 'green'
})

/* creating elements */

const ul = document.querySelector('ul')
const li = document.createElement('li')

// Adding Elements
ul.append(li)

// Modifying Elements
li.innerText = 'X-men'

// Adding and Removing Attributes
li.setAttribute('id','list-items')
li.removeAttribute('id')

// Modifying Attributes & Classes
li.classList.remove('list-items')

// Remove Elements
li.remove()

