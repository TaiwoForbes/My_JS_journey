//  Aync /Await


// Workflow function
const getAllUserEmails = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    const userEmailArray = jsonUserData.map(user =>{
        return user.email
    })
    
    
    // return userEmailArray
    postToWebPage(userEmailArray)   
}


const postToWebPage = (data) =>{
    console.log(data)
}

getAllUserEmails()





/* const myUsers = {
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
    console.log(myUsers.userList)
}

anotherFunc()
 */

