var x = 12131323;

function findNumberLength(numb) {
    
    var numberLength = 0;
    while(Math.floor(numb) !=0) { // basically it comes like 0.12131323000000001 so used Math.floor()
        numb = numb / 10;
        numberLength++;
    }
    return numberLength;
}

console.log(findNumberLength(x));  // 8