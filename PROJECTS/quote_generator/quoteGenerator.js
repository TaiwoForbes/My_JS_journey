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
}, {
    quote:`"No one would have crossed the ocean if he could have gotten off the ship in the storm."`,
    person:`Charles Kettering`
    
} , {
    quote:`"Emotional empathy is what motivates us to help others."`,
    person:`Brian Goldman`

}, {
    quote:`"The arrival of money is the departure of insult. Keep hustle spirit alive, there is no dignity in begging"`,
    person:`Soyemi Issa Taiwo`
}]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})