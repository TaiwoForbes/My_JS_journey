/* Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in
Template Literals (backticks) `hello`.
 */

var hello = "Hello";
var world = 'world';
var helloW = `Hello World`; 

// Strings can be created from other types using the String() function
var intString = String(32)
var booleanString = String(true)
var nuLLStriing = String(null)

// Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.
var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"

// Strings also can be created by using String.fromCharCode method.
String.fromCharCode(104,101,108,108,111) //"hello"
