// Basically if you used setTimeout in object it takes window object as this value.
// If you use setTimeout in function/ class use var that = this to avoid error


// 1. Using in direct function
function abn() {
    var v = '100'; // is as same as window
    setTimeout(function () {
        var z = '200';
        alert(v);        // 100
        alert(this.v);   // undefined point to window object
        alert(z);        // 200
        alert(this.z);   // undefined point to window object
    }, 1);
  }
  abn();

// +++++

// 2. Using in object method
var object = 
{
    'name' : 'user',
    'limit' : function() 
    {
        setTimeout(function() { console.log(this); }, 10000);
    }
}
object.limit(); // window object

// ++++++
// 3. Using in object method
var x = 4,
obj = {
    x: 3,
    bar: function() {
        var x = 2;
        setTimeout(function() {
            var x = 1;
            alert(this.x);
        }, 1000);
    }
};
obj.bar();   // 4
// When you call obj.bar(), the this keyword refers to obj inside of bar. But inside setTimeout you have 
// a different this, the one that refers to the caller of the callback that you pass to setTimeout. 
//This caller doesn't specify a value for this, so instead it just becomes the window object. 
// +++++++
// setTimeout in function
var _this = this;
setTimeout(function() { _this.feedbackTag.removeChild(info); }, 5000);

// +++++
// setTimeout in class
myObject = function(){
    this.wait = function(){
        window.setTimeout("this.run" ,(1000 * randomNumber(1,5)));
    }
}

// use var that = this
var that = this;
 setTimeout(function () {
     that.doStuff();
 }, 4000);
// You can also bind for more succinct code (as originally pointed out by @Raynos):

setTimeout(this.doStuff.bind(this), 4000);


