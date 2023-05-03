//  Aync /Await
const myUsers = {
    userList:[]
}

const myCoolFunction = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    
    return jsonUserData
   
}

myCoolFunction()

const anotherFunc = async () =>{
    const data = await myCoolFunction()
    myUsers.userList = data
}

anotherFunc()

console.log(myUsers.userList)