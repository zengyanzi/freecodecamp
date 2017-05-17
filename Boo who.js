//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
 return  typeof bool==='boolean';
}

booWho(null);


//typeof 

//Type	Result
//Undefined	"undefined"
//Null	"object" (see below)
//Boolean	"boolean"
//Number	"number"
//String	"string"
//Symbol (new in ECMAScript 2015)	"symbol"
//Host object (provided by the JS environment)	Implementation-dependent
//Function object (implements [[Call]] in ECMA-262 terms)	"function"
//Any other object	"object"
