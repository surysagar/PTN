

// When we bind events, the same rule applies, the this value points to the owner. 
// The owner in the following example would be the element.

// let's assume .elem is <div class="elem"></div>
var element = document.querySelector('.elem');
var someMethod = function () {
  console.log(this);
};

element.addEventListener('click', someMethod, false);
// Here, this would refer to <div class="elem"></div>.