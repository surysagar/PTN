// Here we simply pass the namespace as an argument to a self-invoking function. 
// The id variable is private because it does not get assigned to the context.
// many libs like jquery use this approach 

var myApp = {};

(function(context) { 
    var id = 0;
 
    context.next = function() {
        return id++;    
    };
 
    context.reset = function() {
        id = 0;     
    }
})(myApp);   // sag*
 
console.log(
    myApp.next(),
    myApp.next(),
    myApp.reset(),
    myApp.next()
) //0, 1, undefined, 0  