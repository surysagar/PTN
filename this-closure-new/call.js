function myFun() {
    return this; // What is `this` here?
}
var obj = {
    someData: "a string"
};
console.log("this is window:", myFun.call(obj) == window);    // false
console.log("this is obj:", myFun.call(obj) == obj);          // rrue

var numbers = [{
    name: 'Mark'
  },{
    name: 'Tom'
  },{   
    name: 'Travis'
  }];
  for (var i = 0; i < numbers.length; i++) {
    (function () {
      console.log(this.name); // Mark, Tom, Travis
    }).call(numbers[i]);  // each obj will be passed to anonomous function
  }