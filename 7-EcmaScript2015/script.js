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
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(21,1990, 1999, 1965);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur )>= limit));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);