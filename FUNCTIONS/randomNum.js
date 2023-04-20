function random(){
    let num = Math.random() * 10
    return Math.floor(num)
}
for(let i = 0; i < 10; i++){
    // console.log(random())
}


function randomInt(min,max){
    var numOfValues = max - min + 1
    var random =  Math.floor(Math.random() * numOfValues) 
    var sum = min + random

    return `${sum}(${min} + ${random})`

    
}

console.log(randomInt(5,10))