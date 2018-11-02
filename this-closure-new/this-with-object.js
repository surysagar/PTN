

// there is an object property which we are calling as a method then that object becomes 
// this object or execution context object for that method, it is implicit binding of this keyword.

// Here, our window Object didn’t invoke the function - our Object did, so this will refer to 
// the Object that called it:
var obj1 = {
    name: "Pulsar",
    bike: function() {
      console.log(this.name);
    }
}
  var obj2 = { name: "Gixxer", bike: obj1.bike };

  var name = "Ninja";
  var bike = obj1.bike;
  
  bike();           // "Ninja"
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"