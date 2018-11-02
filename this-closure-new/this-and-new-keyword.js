// The this keyword evaluates to the value of the ThisBinding of the current execution context
// ThisBinding is something that the JavaScript interpreter maintains as it evaluates JavaScript code
// holds a reference to an object

// The interpreter updates the ThisBinding whenever establishing an execution context 

// this in Javascript references the object on which the function was called. 
// So if you have an object with a property that happens to be assigned the value of a function, 

function Foo() { 
    return this; 
}

var a = Foo();       //returns window object
var b = new Foo();   //returns empty object of foo

console.log(a instanceof Window);  // true
console.log(a instanceof Foo);     // false

console.log(b instanceof Window);  // false sag*
console.log(b instanceof Foo);     // true

// +++++

// The “new” keyword in JavaScript
// The new keyword in front of any function turns the function call into constructor call and below things occurred when new keyword put in front of function

// A brand new empty object gets created
// new empty object gets linked to prototype property of that function
// same new empty object gets bound as this keyword for execution context of that function call
// if that function does not return anything then it implicit returns this object.
function bike() {
    var name = "Ninja";
    this.maker = "Kawasaki";
    console.log(this.name + " " + maker);  // undefined Bajaj
  }
  
  var name = "Pulsar";
  var maker = "Bajaj";
  
  obj = new bike();
  console.log(obj.maker);                  // "Kawasaki"

  // In the above code snippet, bike function is get called with new keyword in front of it. So, 
  // it creates a new object then that new object gets linked to prototype chain of function bike, 
  // after that the created new object bound to this object and function returns this object. 

