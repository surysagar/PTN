// Destructuring assignment
// Destructuring assignment, available in many other languages, can be a very convenient feature when dealing with objects or arrays.

// Let’s say we want to do this:

var name = user.name;
var email = user.email;
// With ES6 we can use what’s called a destructuring assignment:

var { name, email } = user;
//Alternatively, if we want to use variable names which differ from the property names…

//this declares two variables, userName and userEmail
var { name: userName, email: userEmail } = user;
// Which is functionally equivalent to:

var userName = user.name;
var userEmail = user.email;
// Where is this useful?

// A common pattern is using objects to pass around large numbers of parameters, especially if the parameters are optional. That scenario is where destructuring shines:

function complex({ name, email, phone = null }) {
  //variables `name`, `email`, and `phone` are available here
}
 
var user = {
  name: 'foo',
  email: 'bar',
  phone: '123456'
};
complex(user);