//this in Javascript references the object on which the function was called. 
// So if you have an object with a property that happens to be assigned the value of a function, 
// and you call that property, the this pointer references the object. 
// It does not reference whatever this was where the function was created, 
// nor does it reference the function itself.

var object = {};
object.myfunc = function() { console.log(this); } //<-- this will refer to object
object.myfunc();
// In the case of an event handler, the handler function (in pure Javascript, ignoring jQuery) 
// gets assigned to the DOM element, so it gets called from that element and hence this points 
// to the DOM element.

var obj = {
    someData: "a string"
};

function myFun() {
    return this // What is `this` here?
}

obj.staticFunction = myFun;

console.log("this is window:", obj.staticFunction() == window);  // false
console.log("this is obj:", obj.staticFunction() == obj);        // true


// This is confusing and tricky::
var obj = {
    myMethod: function () {
        return this; // What is `this` here?
    }
};
var myFun = obj.myMethod;
console.log("this is window:", myFun() == window); // true  coz only method(myMethod) is assigned
console.log("this is obj:", myFun() == obj);       // false