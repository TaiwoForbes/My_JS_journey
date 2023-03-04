const heading = document.querySelector('h2')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    console.log('you click me')
})
btn.addEventListener('mousedown', function(){
    console.log('down')
})
btn.addEventListener('mouseup', function(){
    console.log('up')
})

heading.addEventListener('mouseenter',function(){
    heading.classList.add('blue')
})
heading.addEventListener('mouseleave',function(){
    heading.classList.remove('blue')
})
