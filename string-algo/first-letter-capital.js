function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            console.log("First capital letter: "+word[0]);
            console.log("remain letters: "+ word.substr(1));
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
     }
console.log(toUpper("hello friend"))   // Hello Friend