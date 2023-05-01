let submenu = document.querySelectorAll('ul li ul')
const menu = document.querySelectorAll('.menulink')

submenu.forEach(function(item){
    item.classList.add('hide-menu')
})


menu.forEach(function(item){
    item.addEventListener('click',function(event){
        event.preventDefault()
        event.currentTarget.children[1].classList.toggle('hide-menu')
        
    })
})