//strings
console.log('Hello, World!');

let email = 'benjaminbarimahsarpong@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Benjamin';
let lastName = 'Barimah-Sarpong';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[5]);

//string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
let nAme = fullName.toUpperCase();
console.log(nAme, email.toUpperCase());

let index = email.indexOf('@');
console.log(index);
//common string methods
let result = email.lastIndexOf('a');
console.log(result);

let result2 = firstName.slice(0,4);
console.log(result2);

let result3 = firstName.substring(4,2);
console.log(result3);

let result4 = firstName.replace('Benjamin' , 'benny');
console.log(result4);

console.log(result4.toUpperCase())