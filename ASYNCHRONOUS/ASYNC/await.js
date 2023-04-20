// Promises is used to avaid setTime out hell
let stocks = {
    Fruits: ['strawberry','grapes','banana','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts']
}


let is_shop_Open = true

let toppingSChoice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('which topping would you love?'))
            
        },3000)
    })
}

async function kitchen(){
    console.log('A')
    console.log('B')
    console.log('C')

    await toppingSChoice()
    console.log('D')
    console.log('E')
}

kitchen()

console.log('doing the dishes')
console.log('cleaning the tables')
console.log('taking other orders')