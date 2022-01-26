var x = 1;
console.log(Boolean(x));

var y = 0;
console.log(Boolean(y));

let userName = 'turgutkafali';
console.log(userName[0].toUpperCase())

let email = 'turgutkafali@gmail.com';

console.log(email.search('@'));
console.log(email[12]);

let firstName = 'turgut';
let lastName = 'kafali';
firstName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`;
console.log(firstName);