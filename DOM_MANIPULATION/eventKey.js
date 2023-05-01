const nameInput = document.getElementById('name')

/* nameInput.addEventListener('keypress',function(){
    console.log('you pressed a key')
}) */

nameInput.addEventListener('keydown',function(event){
    console.log('you pressed a key')
    console.log(`${event.key}`) // you can also use the event.which but this has been deprecated
})
/* nameInput.addEventListener('keyup',function(){
    console.log(nameInput.value)
})
 */
nameInput.addEventListener('click', nameInput => {
    nameInput.currentTarget.classList.add('blue')
})