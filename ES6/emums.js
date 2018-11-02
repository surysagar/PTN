// Enums:


https://www.sohamkamani.com/blog/2017/08/21/enums-in-javascript/

// Use enums if there are a definite number of fixed values for any one variable
// In the end, using enums in javascript correctly will lead to better code that is more stable, easier to read and less error prone.

//eq.1
const seasons = {
    SUMMER: 'summer',
    WINTER: 'winter',
    SPRING: 'spring',
    AUTUMN: 'autumn'
}

let season = seasons.SPRING

if(!season){
    throw new Error('Season is not defined')
}

switch(season){
    case seasons.SUMMER:
    // Do something for summer
    case seasons.WINTER:
    //Do something for winter
    case seasons.SPRING:
    //Do something for spring
    case seasons.AUTUMN:
    //Do something for autumn
}


//eq.2

const Colors = Object.freeze({
    RED:   Symbol("red"),
    BLUE:  Symbol("blue"),
    GREEN: Symbol("green")
});
