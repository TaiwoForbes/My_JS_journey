
const submit = document.querySelector('.submit')
const answer = document.querySelector('.invisible')
const allElement = document.querySelector('.wrapper')
const heading = document.querySelector('h1')
const paragraph = document.querySelector('.parag')
let convertType = 'miles'


document.addEventListener('keydown', function (event) {
    let key = event.code
    if (key === 'KeyK') {
        convertType = 'kilometers'
        heading.textContent = "Kilometers to Miles Converter"
        paragraph.textContent = 'Type in a number of Kilometers and click the button to convert the distance to Miles'
        
    }
    else if (key === 'KeyM') {
        convertType = 'miles'
        heading.textContent = "Miles to Kilometer Converter"
        paragraph.textContent = 'Type in a number of miles and click the button to convert the distance to kilometers'
        
      
    }

})


submit.addEventListener('click', function (event) {
    let input = document.querySelector('.input')

    event.preventDefault()
    input = parseFloat(input.value)


    if (input) {

        if (convertType === 'miles') {
            let convert = (input * 1.609344).toFixed(3)
            answer.textContent = `${input} miles to kilometer is ${convert}`

        }
        else{
            let convert = (input * 0.621371192).toFixed(3)

        answer.textContent = `${input} kilometers to miles is ${convert}`
    
        }
    }
    else {
        answer.textContent = `Enter a digit!`
    }



})