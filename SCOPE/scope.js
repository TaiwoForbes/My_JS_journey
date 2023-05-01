var aVariable = 'this is global'
function  testScope(){
    var aVariable = 'this is local'
    console.log(aVariable)
}
testScope()
console.log(aVariable)