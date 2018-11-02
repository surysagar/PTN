// Variable arguments - You can pass different sets of arguments (in both type and quantity) and the 
// function will behave in a way that matches the arguments passed to it.



function OpenBox_impl1(obj1,obj2){
    // code
}
function OpenBox_impl2(obj1,obj2,obj3,obj4,obj5){
    // code
}

function OpenBox(obj1, obj2, obj3, obj4, obj5) { // a function decides which fun. should be invoked
    if(arguments.length == 2)
        return OpenBox_impl1(obj1, obj2);
    else
        return OpenBox_impl2(obj1,obj2,obj3,obj4,obj5);
}