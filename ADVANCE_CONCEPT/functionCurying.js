function sum(a,b,c){
    return a + b + c
}

/* console.log(sum(2,3,4)) */


function cury(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = cury(sum)
console.log(curriedSum(2)(3)(4))