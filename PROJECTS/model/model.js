let openbtn = document.getElementById('open-btn')
let modelContainer = document.getElementById('model-container')
let closebtn = document.getElementById('close-btn')

/* Event listener */

openbtn.addEventListener('click', function(){
    modelContainer.style.display = 'block'
})

closebtn.addEventListener('click',function(){
    modelContainer.style.display = 'none'
})

window.addEventListener('click',function(e){
    if(e.target === modelContainer){
        modelContainer.style.display = 'none'
    }
})