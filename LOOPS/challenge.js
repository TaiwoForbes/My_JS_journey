const food = ['chese', 'pie', 'lunch', 'breakfast']

for(let item in food){
    if(item % 2 === 0){
        console.log(food[item].toUpperCase())
    }else{
        console.log(food[item])
    }
}