// 1. this binding
// How often do you see something like this done in JS?

var self = this;
el.onclick = function() {
  self.doSomething();
};
// This pattern crops up occasionally, especially in less experienced dev’s code. The solution is to use bind to fix this in the function, but it’s a bit verbose.

// With arrows, we can instead just do this:

el.onclick = () => this.doSomething()

// 2. Arrow functions
// Arrows is a new syntax for functions, which brings several benefits:

// Arrow syntax automatically binds this to the surrounding code’s context sag*

//arrow function with no parameters
var a1 = () => 1;
 
//arrow with one parameter can be defined without parentheses
var a2 = x => 1;
var a3 = (x) => 1;
 
//arrow with multiple params requires parentheses
var a4 = (x, y) => 1;
 
//arrow with body has no implicit return
var a5 = x => { return 1; };