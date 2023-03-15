// Functins, return, if, arrays, for loop
const gas = [20,40,100,30];
const food = [10,4,50];

function calculateTotal(array){
    let total = 0;
    for(let i = 0;i < array.length;i++){
        total = array[i] + total ;       
    } 
    if (total > 100) {
        console.log('Whoa! You are spending way too much');
    }
    else {
        console.log('Ohps! Your total is less than 100');
    }
    return total;
}

console.log(calculateTotal(gas))
console.log(calculateTotal(food))


