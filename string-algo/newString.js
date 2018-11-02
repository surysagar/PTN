String({p1:1})   // [object object
String [1,2,3]    // '1,2,3'
String ([1,2,3]) === [1,2,3].toString();   // true

var s = new String('Couch potato');
say.charAt(0)       // 'C'
s.indexOf('o')      // 1
s.indexOf('o', 2)   // 7
s.lastIndexOf('o')  // 11
s.slice(1)          // 'ouch potato'
s.substring(1)      // 'ouch potato'

s.slice(1, 5)          // 'ouch'
s.substring(1, 5)      // 'ouch'

s.slice(1, -1)          // 'ouch potat'
s.substring(1, -1)          // 'c'


"pool".replace('o', '*')    // p*ol
"pool".replace(/o/g, '*')    // p**l