// So, basically a callback is calling another function inside a funtion
function morning(name){
    return `Good morning ${name}`
}

function greet(name,func){
    const myName = 'John'
    console.log(`${func(name)}, my name is ${myName}`)
}

greet('Taiwo', morning)