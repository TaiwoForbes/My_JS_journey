const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',function(e){


    let randomNumber = Math.floor(Math.random() * colors.length)
    e.target.parentElement.parentElement.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    
})
