function f() {
    function c() {
        console.log(this); //
        return this;
    }
    return c();
}
var o = new f();        // this refer window object as it point from var o which is global.


function C() {
    this.a = 1;
    return false;
}

var d = new C();
d.a;                         // 1
console.log(typeof new C);   // object

function F(a) {
    this.a = a;
    return false;
}

var e = new F('sagar');             
e.a;                         // 'sagar'