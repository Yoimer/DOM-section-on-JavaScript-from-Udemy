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

// const boxes = document.querySelectorAll('.box');

// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// // boxesArr5.forEach(function(cur) {
// //     cur.style.backgroundColor = 'dodgerblue';
// // });

// //ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// //ES5
// // for(var i = 0; i < boxesArr5.length; i++){
// //     if(boxesArr5[i].className === 'box blue'){
// //         continue;
// //         // break;
// //     }

// //     boxesArr5[i].textContent = 'I changed to blue';

// // }

// //ES6
// for(const cur of boxesArr6) {
//     if(cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }

// //ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur){
//     return cur >= 18;
// }); 
// console.log(full);

// console.log(full.indexOf(true));

// console.log(ages[full.indexOf(true)]);

// //ES6
// // returns the index when cur is greater than or equal to 18(callback function)
// console.log(ages.findIndex(cur => cur >= 18));

// // returns the value when cur is greater than or equal to 18(callback function)
// console.log(ages.find(cur => cur >= 18));

///////////////////////////////////
// Lecture : Spread Operator

// function addFourAges(a, b, c, d) {
//     return a + b +c +d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// // apply method will take the ages array using the
// // addFourAges function using the elements of the array
// // as the arguments
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6
// //... is the spread operator
// //...ages means the same as writing 18,30,12,21 into addFourAges
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// // let spread familySmith and familyMiller
// const bigFamily = [...familySmith, 'Lily',...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// // spreading h into boxes (boxes is a NodeList)
// const all = [h, ...boxes];
// // converting the spread (all) into an array
// Array.from(all).forEach(cur => cur.style.color = 'purple');

///////////////////////////////////
// Lecture: Rest Parameters

// rests parameters allows to pass
// an abirtrary number of arguments into a function
// and use them in the function

//ES5
// function isFullAge5() {
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur) {
//         console.log((2016 - cur) >= 18)
//     })
// }

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
// function isFullAge6(...years) {
//     years.forEach(cur => console.log((2016 - cur )>= 18));
// }

// isFullAge6(1990, 1999, 1965);

// difference between spread operator and rest parameter
// it is the place in which we use each of them
// spread operator: it is used in a function call
// rest parameter: it is used in the function declaration to accept an arbitrary number of parameters

//ES5
// function isFullAge5(limit) {
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur) {
//         console.log((2016 - cur) >= limit);
//     })
// }

// isFullAge5(21,1990, 1999, 1965);

// //ES6
// function isFullAge6(limit, ...years) {
//     years.forEach(cur => console.log((2016 - cur )>= limit));
// }

// isFullAge6(1990, 1999, 1965, 2016, 1987);

///////////////////////////////////
// Lecture: Default Parameters
/* 
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish'); */

//ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

///////////////////////////////////
// Lecture: Maps

// a map is new key value data structure in ES6
// in a map we can use anything for a key
// in objects we're limited for strings
// but in map we can use any kind of primative value like number, string or boolean.
// or we could even use function, or objects as keys

// const question = new Map();
// // this is how we define a new key pair in a map
// question.set('question', 'What is the official name of the lastest major Javascript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again!');

// retrieve data from map
// console.log(question.get('question'));
// // get size
// console.log(question.size);
// // delete 
// // question.delete(4);

// //checks for an element
// if(question.has(4)) {
//     // question.delete(4);
//     console.log('Answer 4 is here');
// }

// deletes all the values on map at the same time
// question.clear();

// for loops in maps
// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for of loop
// for (let [key, value] of question.entries()) {
//     // console.log(`This is ${key}, and it's set to ${value}`);
//     if (typeof(key) === 'number') {
//         console.log(`Answet ${key}: ${value}`);
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

// summarize
// why are maps better than objects

// in maps we can use anything like keys
// maps are iterable we can loop through them
// it is really easy to get the size of the map with the size method
// we can easily get and remove data from them

///////////////////////////////////
// Lecture: Classes

//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();