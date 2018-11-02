
// ananomous functions are callbacks

// Three Main Ways To Define Anonymous Functions

// There are three main anonymous function declarations you will run into:

// 1. IIFE (Immediately Invoked Function Expression)

( function (x) { return x * 2; } )(2);


// 2. Assignment to Variable

var multiplyByTwo = function (x) { return x * 2; };


// 3. and Anonymous Functions used as a parameter passed to another function

[1, 2, 3, 4, 5].map( function(x) { return x * 2;} );



(function () {
    //...
 }());


 // in es6  sag*
 (() => "foobar")() // returns "foobar" 