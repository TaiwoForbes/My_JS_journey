const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

/* Changing the class name first */
const classValue  = first.className
/* console.log(classValue) */
second.className = 'colors text'
console.log(second)
third.classList.add('colors')
console.log(third)
