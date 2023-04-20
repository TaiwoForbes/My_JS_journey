// Promises is used to avaid setTime out hell
let stocks = {
    Fruits: ['strawberry','grapes','banana','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts']
}


let is_shop_Open = true

/* let order = ()=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_Open){
            resolve()
        }
        else{
            reject()
        }
    })
} */

async function order(){
    try{
        await abc
    }
    catch(error){
        console.log('abc doesnt exist',error)
    }
    finally{
        console.log('runs code anyways')
    }
}

order().then(()=>{
    console.log('It is well with me')
})