const nameInput = document.getElementById('name')

/* nameInput.addEventListener('keypress',function(){
    console.log('you pressed a key')
}) */

/* nameInput.addEventListener('keydown',function(){
    console.log('you pressed a key')
}) */
/* nameInput.addEventListener('keyup',function(){
    console.log(nameInput.value)
})
 */
nameInput.addEventListener('click', nameInput => {
    nameInput.currentTarget.classList.add('blue')
})