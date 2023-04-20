/*
    A closre is the combination of a function bundled together 
    with references to its usrrounding state. Clousure are created 
    every time a function is created, at function creation time 
*/

function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
     return inner
}
const fn = outer()
fn()
fn()
fn()
fn()
fn()