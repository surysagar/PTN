// in object literal our window Object didn’t invoke the function - our Object did, so this will 
// refer to the Object that called it, The same applies with Constructors:

var myConstructor = function () {
    this.someMethod = function () {
        console.log(this);
    };
};

myConstructor.prototype = {
    somePrototypeMethod: function () {
        console.log(this);
    }
};

var a = new myConstructor();
a.someMethod();
a.somePrototypeMethod();
// Interestingly, in both cases the this value will refer to the Constructor object, 
// which will be myConstructor.

