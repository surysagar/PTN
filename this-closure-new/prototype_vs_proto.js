// Every JavaScript function has a prototype property (this property is empty by default), and you 
// attach properties and methods on this prototype property when you want to implement inheritance. 
// This prototype property is not enumerable; that is, it isn’t accessible in a for/in loop.

// The prototype property is used primarily for inheritance; you add methods and properties on a 
// function’s prototype property to make those methods and properties available to instances of that 
// function.

// Prototype is important in JavaScript because JavaScript does not have classical inheritance 
// based on Classes (as most object oriented languages do), and therefore all inheritance in 
// JavaScript is made possible through the prototype property. 

// All built-in constructors (Array (), Number (), String (), etc.) were created from the Object 
// constructor, and as such their prototype is Object.prototype.

// Instances of a constructor function use __ proto __ to access the prototype of it's constructor 
// function.

function Person(name){ 
    this.name = name 
 }; 

Person.prototype.setname = function() { return "xyz" }; var eve = new Person("Eve");

console.log(eve);
// Person {name: "Eve"}
//  name:"Eve"
//  __proto__:
//      setname:ƒ ()
//      constructor:ƒ Person(name)
//      __proto__:Object