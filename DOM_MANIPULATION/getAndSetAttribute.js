const first = document.querySelector('.firsts')
const idValue = first.getAttribute('id')
/* console.log(idValue) */

const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink)

const last = link.nextElementSibling
last.setAttribute('class', 'first')
/* This overwrite the text content */ last.textContent = 'I also have a class of first'
console.log(last)

const links = document.querySelectorAll('.first')
console.log(links)
