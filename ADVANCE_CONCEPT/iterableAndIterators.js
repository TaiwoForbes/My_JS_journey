let name = 'taiwo'
for(const char of name){
    console.log(char)
} 

function* generator(){
    yield 'hello'
    yield 'hello'
    yield 'hello'
}

let generatorObj = generator()
for(const word of generatorObj){
    console.log(word)
}