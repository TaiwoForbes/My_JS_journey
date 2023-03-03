// Event Delegation

// It allows user to append a SINGLE event listener to a parent elemet that adds to to all its presnet and future descendants thst match a selector

document.querySelector('#sports').addEventListener('click',function(e){
    console.log(e.target.getAttribute('id') + ' is clicked')
    const target = e.target
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})

const sprt = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'rugby'

newSport.setAttribute('id','rugby')

sports.appendChild(newSport)