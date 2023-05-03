//  Fetch API requires a discussion of..
// Callbacks, Promises, Thenables, and Async/ Await

// Promises consist of 3 stage: Pending, Fulfilled, Rejected


/* const myPromise = new Promise((resolve, reject) => {
    const error = false
    if (!error) {
        resolve('Yes! resolved the promise!')
    }
    else {
        reject('No! rejected the promise')
    }
})

console.log(myPromise)
myPromise.then(value => {
    return value + 1
})

    .then(newValue => {
        console.log(newValue)
    })

    .catch(err => {
        console.log(err)
    })


const nextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('my next promise resolved')
    }, 3)
})

nextPromise.then(value => {
    console.log(value)
})

myPromise.then(value => {
    console.log(value)
})
 */

const users = fetch("https://jsonplaceholder.typicode.com/users")
// Pending 
    .then(response => {
        return response.json()
    })
    .then(data =>{
        data.forEach(user => {
            console.log(user)
        });
    })

console.log(users)


