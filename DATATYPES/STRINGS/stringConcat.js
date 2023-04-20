/* String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the
String object prototype.
 */
var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d"


// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.
var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean); // "string32true"