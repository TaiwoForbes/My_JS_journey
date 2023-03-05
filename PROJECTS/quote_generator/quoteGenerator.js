// Variables
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote:`"If you look at what you have in life,you'll always have MutationRecord. If you look at what you dont have in life, you'll never have enough"`,
    person: 'Opran  Winfrey'
}, {
    quote: `"It doesnt matter how slowly you go as long as you dont stop"`,
    person: 'Confucious'
}, {
    quote: `"Remember that not gettinh what you want is sometimes a wonderful stroke of luck."`,
    person:'Dalal Laha'
} ]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})