

function myClass(name) {
    console.log(name == this.name);  // false
    
    var name = 'santyaaaaaaaaaa';    // if we use var name on top of this.name it will consider valid.
    window.setTimeout(function() {  console.log(name), 2000})   // santyaaaaaaa
    this.name = name;
    
    console.log(name == this.name);  // true
    
  };
  //myClass();
  //console.log(a);
  
  //var sag = new myClass('santosh');
  //console.log(a);
  //console.log(name);
  //console.log(sag.name)
  
  
  var san = new myClass('santosh');
  console.log(san.name)               // santyaaaaaaaaaaa
  console.log(san.name)      // we will get 'santosh' only if we remove var name from class