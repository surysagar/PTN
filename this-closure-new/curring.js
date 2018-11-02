/// Currying refers to the process of transforming a function with multiple arity into the same function 
// with less arity. The curried effect is achieved by binding some of the arguments to the first function 
// invoke, so that those values are fixed for the next invocation. Here’s an example of what a curried 
// function looks like:


var babyAnimals = function(a) {
    return function(b) {
       var result = 'i love '+ a +' and '+ b;
       return result;
    };
};
var babyKoala = babyAnimals('koalas');
babyKoala('elephant');  // "i love koalas and elephant"
babyKoala('flamingos'); // "i love koalas and flamingos"
babyKoala('axolotls')   // "i love koalas and axolotls"