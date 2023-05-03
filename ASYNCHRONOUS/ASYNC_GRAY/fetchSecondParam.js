// Second ParaMeter of Fetch is usually a object


// Using the 'GET' method
/* const getDadJoke = async()=>{
    const response = await fetch("https://icanhazdadjoke.com", {
        method: 'GET',
        headers:{
            Accept:"application/json"
        }
    })

    // you can also return text instead of json
    const jsonJokeData = await response.json()
    console.log(jsonJokeData.joke)

}

getDadJoke() */

// Using the 'POST' method
/* const jokeObj = {
    id:'0o071TSv4Ed', 
    joke:'My wife said I was immature. So I told her to get out of my fort.'
}


const postData = async(jokeObj)=>{
    const response = await fetch("https://httpbin.org/post", {
        method: 'POST',
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify(jokeObj)
    })

    
    const jsonResponse = await response.json()
    console.log(jsonResponse.headers)

}

postData(jokeObj) */




const requestJoke = async(firstName, lastName)=>{
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}$limitTo[nerdy]`)
    const jsonResponse = await response.json()

    console.log(jsonResponse.value)

}

requestJoke("Clint","Eastwood")