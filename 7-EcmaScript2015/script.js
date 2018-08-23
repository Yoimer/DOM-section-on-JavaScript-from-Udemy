///////////////////////////////////
// Lecture : Destructuring

// extracts all data that is saved in array in a single variable

// ES5 (not practical when having a huge array length)
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;

// console.log(a);
// console.log(b);

// // another way to return multiple values
// // (avoiding returning an object)

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

///////////////////////////////////
// Lecture : Arrays

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
// for(var i = 0; i < boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;
//         // break;
//     }

//     boxesArr5[i].textContent = 'I changed to blue';

// }

//ES6
for(const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
}); 
console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);

//ES6
// returns the index when cur is greater than or equal to 18(callback function)
console.log(ages.findIndex(cur => cur >= 18));

// returns the value when cur is greater than or equal to 18(callback function)
console.log(ages.find(cur => cur >= 18));