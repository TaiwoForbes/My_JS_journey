const headings = document.getElementsByTagName('h2')
headings[1].style.color = 'red'


const items = document.getElementsByTagName('li')
/* items.forEach(function(item) {
    console.log(item)
    
}); */

const betterItem = [...items]
betterItem[1].style.color = 'orange'
betterItem.forEach(function(item){
    console.log(item)
})