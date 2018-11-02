function dashBetweenEvenNumbers(n) {
    var number = n + '';
    console.log(number.length)
    var lastWord = '';
    var finalArray = [];
    for (var i = 0; i < number.length; i++) {
        console.log(number[i], lastWord);
        //console.log((parseInt(number[i])) % 2 == 0) ;
        if((parseInt(number[i])) % 2 === 0 && (parseInt(lastWord) % 2 === 0)) {   // parseInt(number[i-1])
            finalArray.push('-');
        }
        finalArray.push(number[i]);
        lastWord = number[i];
        
    }
    return finalArray.join('');
    //console.log(finalArray);
}

console.log(dashBetweenEvenNumbers(221983848522));	