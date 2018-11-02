
// Sometimes you need to define and call function at the same time and only once so in this case 
// anonymous function helps you. In such situations giving functions a name and then calling them 
// is just excess.

// Further sometimes you wants to create a namespace for your variables. So anonymous functions 
// helps you there too. For example

(function($) {
    $.fn.pluginName = function(opt) {
        // implementation goes here...
    }
}(jQuery));
// In above case you can safely use $ as jQuery synonym in your code.

// If you define a function with name as shown below, then it will create global variable with 
// function name as you defined.

function myFunction() {
    // function code goes here.
}
myFunction();
// But if you define it without name then it won't create any global variable and your global 
// namespace will not be polluted.

(function myFunction() {
    // function code goes here.
}());
// Function with names are useful only when you need to call them from different places in your code.