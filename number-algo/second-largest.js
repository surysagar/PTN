var array = [4,4,24,23,32,122334,3432,323,2323,123,345543,3,233,32323233,23333]
var b = 'wgrgfsgsgsgsgsdg';

function secondLargest(array) {
    var newArray = array.sort(function(a,b) {
        return a-b;
    })
    return newArray;
}

console.log(secondLargest(array));