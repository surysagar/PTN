
// ES6 for of makes possible sag*
// for ..of loop: replaces for in and forEach
for (let d of 'string') {
	console.log(d);
}
// 's', 't', 'r', 'i', 'n', 'g'



// IN ES5

for (c in 'string') {
	console.log(c);
}
// output 0,1,2,3,4,5