// bind useful in setTimeout

var obj = {};
obj.myMethod = function () {
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // this = obj
    }.bind(this), 100); // .bind() #ftw
};
obj.myMethod();

// We can also use the jumping scope trick, var that = this;:

var obj = {};
obj.myMethod = function () {
  var that = this;
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(that); // that (this) = obj
    }, 100);
};
obj.myMethod();

//++++++++++
// how context changes
x = 9;
var module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};

module.getX(); // 81   

var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object

// create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81

// +++++++

var name = 'globalName';

const obj = {
  name: 'myName',
  sayName: function () { console.log(this.name);}
}

const say = obj.sayName; // we are merely storing the function the value of this isn't magically transferred

say(); // now because this function is executed in global scope this will refer to the global var

const boundSay = obj.sayName.bind(obj); // now the value of this is bound to the obj object

boundSay();  // Now this will refer to the name in the obj object: 'myName'


// ++++++++++++++++++++++++++++

// For example, you have a function to deduct monthly club fees

function getMonthlyFee(fee){
    var remaining = this.total - fee;
    this.total = remaining;
    return this.name +' remaining balance:'+remaining;
  }
  // Now you want to reuse this function for a different club member. Note that the monthly fee will vary from member to member.
  
  // Let's imagine Rachel has a balance of 500, and a monthly membership fee of 90.
  
  var rachel = {name:'Rachel Green', total:500};
  // Now, create a function that can be used again and again to deduct the fee from her account every month
  
  //bind
  var getRachelFee = getMonthlyFee.bind(rachel, 90);
  //deduct
  getRachelFee();//Rachel Green remaining balance:410
  getRachelFee();//Rachel Green remaining balance:320