

function sum(a,b,c) {
    return a+b+c;
 }
 var z = [1,2,3];


 sum.apply(z)     //  NaN wrong sag*
 
 sum.apply(null,z)  //  6  correct

 sum(...z)    // 6 correct ES6

 // ++++++++++++++++++++++++++++++++++++++++++

 function test()
{
  console.log(this);
}

body = document.getElementsByTagName("body")[0]; // shortcut to body element

test.apply(body); // returns [object HTMLBodyElement]

test.apply(this, body);   // correct sag*

// ++++++++++++++++++++++++++++++++++++++++++++++++

var obj1 = { which : "obj1" },
obj2 = { which : "obj2" };

function execute(arg1, arg2){
    console.log(this.which, arg1, arg2);
}

//using call
execute.call(obj1, "dan", "stanhope");
//output: obj1 dan stanhope

//using apply
execute.apply(obj2, ["dan", "stanhope"]);
//output: obj2 dan stanhope

//using old school
execute("dan", "stanhope");
//output: undefined "dan" "stanhope"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++