const display = document.querySelector('.display')
const h1 = document.querySelectorAll('h1')
const equal = document.querySelector('.equal')



const convert = (e)=>{
    let target = e.currentTarget.textContent
    display.value += target
    
    if(target === '='){
        
       
        /* console.log(display.value = eval(display.value)) */
    }

    console.log(display)
    
}



h1.forEach(element => {
    element.addEventListener('click',convert)
});

