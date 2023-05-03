const getJson = async ()=>{
    const response = await fetch('mario.json')

    if(response.status !== 200){
        throw new Error('cannot fetch the data')
    }

    const data = await response.json()
    return data
}

getJson()
    .then((data)=>{
        console.log('rejected',data)
    })
    .catch(err => console.log('rejected:',err.message))