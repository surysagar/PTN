westeros = {};  //// Module, we need to attach an object to global namespace. its a top level object

// this allows spread your definitions over number of files.

// You could define single class in each individual files and bring them all together as a part of
// build process.

westeros = westeros || {};   // module is present if not assign object.

westeros.Castle = function(name) {this.name = name}   // constructor

var winterfell = new westeros.Castle('Winterfell');
westeros.Castle.prototype.Build = function() {
    console.log('Castle build ' + this.name);
}
winterfell.Build();   //  'Castle build Winterfell'


//::: 2 nd way
var Castle = (function() {
    function Castle (name) { return this,name};
    Castle.prototype.build = function() { console.log('Castle build ' + this.name)};
})();

westeros.Castle = Castle;

var winterfell = new westeros.Castle('Winterfell');
winterfell.Build();   //  'Castle build Winterfell'