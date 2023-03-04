const container = document.querySelector('.container')
const list = document.querySelector('.list-items')
const btn = document.querySelector('.btn')


function showBubbling(e){
    console.log('currentTarget',e.currentTarget)
    console.log('Target',e.target)
    if (e.target.classList.contains('link')){
        console.log('you click on the link')
    }
}

function stopPropagation(e){
    e.stopPropagation()
}

list.addEventListener('click',stopPropagation)
/* container.addEventListener('click',showBubbling) */

btn.addEventListener('click', function(){
    const head = document.createElement('h1')
    head.textContent = "1'm a new creation"
    container.appendChild(head)
})

