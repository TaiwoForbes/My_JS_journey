/* const button2 =  document.querySelector('.btn-2')

function alertBtn(){
    alert('i also love jvascript')
}

button2.addEventListener('click', alertBtn)
 */


// Mouseover Event

/* const newBackgroundColor = document.querySelector('.box-3')

function changeBgColor (){
    newBackgroundColor.style.backgroundColor = 'blue'
}

newBackgroundColor.addEventListener('mouseover', changeBgColor) */


// Reveal Event

const revealBtn = document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content')

function revealContent(){
   /*  if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }
    else{
    hiddenContent.classList.add('reveal-btn')
    } */


    /* Alternative approach */
    hiddenContent.classList.toggle('reveal-btn')
}

revealBtn.addEventListener('click',revealContent)