function createBase(addBase) {
    var total = addBase;
    return function (val) {
        total += val;
        return total;
    }
};

var addSix = createBase(6);
console.log(addSix(10));  // 16
console.log(addSix(12));  // 28 but we want 18 means 6+12 =16 not a typical closure way

// solution
function createBase(base) {
    return function(add) {
        return base + add;
    }
}

var addSix = createBase(6);
alert(addSix(10));
alert(addSix(21));


// +++++++
