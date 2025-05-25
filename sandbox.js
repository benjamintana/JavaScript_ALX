//let age = 26;
//let year = 2025;
//log things to console;
/*
console.log(age);

age= 28
console.log(age,year);

const points = 500;
console.log(points);*/

//var score = 100;
//score =75;
//console.log(score);


const title = 'Best roads of 2025';
const author = 'Benjamin Barimah-Sarpong';
const heart = 100;

//concatenation way
let result8 = 'The blog called ' + title + ' by ' + author + ' has ' + heart + ' likes';
console.log(result8.toUpperCase());

//template string way //template string is inserted using back ticks ``
let result9 = `The blog called ${title} by ${author} has ${heart} likes`;
console.log(result9);

//crating HTML templates
let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${heart} likes</span>
`;

console.log(html)