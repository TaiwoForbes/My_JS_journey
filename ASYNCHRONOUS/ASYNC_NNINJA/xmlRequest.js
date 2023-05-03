const getTodes = (Callback) => {
    const request = new XMLHttpRequest()



    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            Callback(undefined,request)
        }
        else if (request.readyState === 4) {
            Callback('could not fetch data',undefined)
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

getTodes((err,data)=>{
    console.log('callback fired')
    
    if(err){ 
        console.log(err)
    }
    console.log(data)
})