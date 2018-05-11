//  // // // Function constructor

// // // var john = {
// // //     name: 'John',
// // //     yearOfBirth: 1990,
// // //     job: 'teacher'
// // // };

// // // // Function Constructor
// // // // They're always started with a capital letter (uppercase)
// // // // the function paramaters are the variable we want to set in our object
// // // // 
// // // var Person = function(name, yearOfBirth, job) {
// // //     this.name = name;
// // //     this.yearOfBirth = yearOfBirth;
// // //     this.job = job;
// // //     // this part of the code was comented on purpose
// // //     // read below why we did so.
// // //     /*this.calculateAge = function() {
// // //         console.log(2018 - this.yearOfBirth);
// // //     }*/
// // // }

// // // // explanation of the above comented section:
// // // // inheritance in practice :)
// // // // all the methods and properties we want to
// // // // be inherited we can add'em in the
// // // // object.prototype method (Person.prototype)
// // // // none of the objects has attached the calculateAge method
// // // // to them. But still, they're going to be able to use it.
// // // // They will have access to it because it is in their prototype
// // // // the calculateAge method is no longer on our constructor
// // // // but we can still use it, and that's because it is in the
// // // // prototype property of our function construction.
// // // Person.prototype.calculateAge = function() {
// // //     console.log(2018 - this.yearOfBirth);
// // // };

// // // // adding a property to be inherited to
// // // // not used that much, but still it will work
// // // // as a method would
// // // Person.prototype.lastName = 'Smith';

// // // // this is how we create new objects using the construction function
// // // // this is instantiation.
// // // // the john object is an intance of the Person constructor(called class in another languages)
// // // var john = new Person('John', 1990, 'teacher');
// // // var jane = new Person('Jane', 1969, 'designer');
// // // var mark = new Person ('Mark', 1948, 'retired');

// // // // explanation
// // // // when using the new keyword, a new empty object is created
// // // // then the construction function is called (in this case is Person) with the arguments
// // // // we specified.
// // // // as we must know, calling a function, creates a new execution context
// // // // that also has .this variable.
// // // // when function is not returning anything, like 
// // // // clearly this case is, then the result is simply
// // // // the object we created in the first place, the new empty object
// // // // now, the john var has the propierties from new.

// // // john.calculateAge();
// // // jane.calculateAge();
// // // mark.calculateAge();
// // // console.log(john.lastName);
// // // console.log(mark.lastName);
// // // console.log(jane.lastName);

// // // Object.create

// // // var personProto = {
// // //     calculateAge: function () {
// // //         console.log(2018 - this.yearOfBirth);
// // //     }
// // // };

// // // var john = Object.create(personProto);
// // // john.name = 'John';
// // // john.yearOfBirth = 1990;
// // // john.job = 'teacher';

// // // var jane = Object.create(personProto,
// // // {
// // //     name: { value: 'Jane' },
// // //     yearOfBirth: { value: 1969 },
// // //     job: { value: 'designer' }
// // // });

// // /*
// // Explanation

// // The difference of Object.create and
// // function constructor pattern is that
// // object.create builds an object that inherits directly from the one that
// // we pass into to first argument.
// // While in the other hand function constructor the newly created object
// // inherits from the constructors prototype property

// // */

// // // Primitives vs objects

// // /*
// // Variables containing primitives actually hold that data inside the
// // variable itself.
// // On objects it is very different. The variables associated with objects
// // do not actually contain the object but instead, they contain a reference
// // to the place in memory where the object sits, where object stores.
// // Again, a variable declared as an object, does not have a real copy of the object;
// // it just points to that object.
// // */

// // var a = 23;
// // var b = a;
// // a = 46;
// // // console.log(a);
// // // console.log(b);

// // // Objects
// // var obj1 = {
// //     name: 'John',
// //     age: 26
// // };
// // var obj2 = obj1;
// // obj1.age = 30;
// // // console.log(obj1.age);
// // // console.log(obj2.age);

// // // Functions
// // var age = 27;
// // var obj = {
// //     name: 'Jonas',
// //     city: 'Lisbon'
// // };

// // function change (a, b) {
// //     a = 30;
// //     b.city = 'San Francisco';
// // }

// // change(age, obj);
// // console.log(age); // 30
// // console.log(obj.city); // San Francisco

// // /*
// // When we pass a primitve into a function a simple copy is created.
// // We can change 'a' as much as we want (inside function change),
// // it will neve affect the variable from the outside cos it is a primitive.
// // But when we pass an object, it is NOT REALLY AN OBJECT that we pass, but a reference to that object.
// // Again, we dot not pass an object into a function, but only the reference that points to that object.
// // So when we change the object inside the function, it sitll reflects it outside the function.
// // */

// //////////////////////////////////////////////////////////////////////////////////////
// // Lecture: Passing functions as arguments
// // CALLBACK FUNCTIONS!!!!!!!! YEAHH
// // var years = [1990, 1965, 1937, 2005, 1998];

// // function arrayCalc(arr, fn) {
// //     var arrRes = [];
// //     //The push() method adds new items to the end of an array, and returns the new length
// //     for (var i = 0; i < arr.length; i++) {
// //         arrRes.push(fn(arr[i]));
// //     }
// //     return arrRes;
// // }

// // // el stands for element
// // function calculateAge(el) {
// //     return (2018 - el);
// // }

// // // returns true if and only if el is >=18
// // function isFullAge(el) {
// //     return el >= 18;
// // }

// // function maxHeartRate (el) {
// //     if (el >= 18 && el <= 81) {
// //         return Math.round(206.9 - (0.67 * el));
// //     } else {
// //         return - 1;
// //     }
// // }

// // //passing calculateAge function as an argument (callback)
// // var ages = arrayCalc(years, calculateAge);
// // console.log(ages);

// // //passing isFullAge function as an argument (callback)
// // var fullAges = arrayCalc(ages, isFullAge);
// // console.log(fullAges);

// // //passing maxHeartRate function as an argument (callback)
// // var rates = arrayCalc(ages, maxHeartRate);
// // console.log(rates);

// //////////////////////////////////////////////////////////////////////////////////////
// // Lecture: Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         //anonymous function, it has no name
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', ')
//         }
//     }
// }

// // here teacherQuestion is declared as a variable.
// // later it will become a function
// var teacherQuestion = interviewQuestion('teacher');
// // now calling this variable as a function
// teacherQuestion('John');

// // here tdesignerQuestion is declared as a variable.
// // later it will become a function
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');

// // we can use designerQuestion as many times as you want to.
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');
// designerQuestion('Mike');

// // another way the gat the same approach
// // interviewQuestion will return a function
// // there is no need to store this function in a variable
// // we could use it immediately as shown above
// // this works from LEFT TO RIGHT
// interviewQuestion('teacher')('Robert');



//////////////////////////////////////////////

// Lecture :IIFE (ifi)
// private variables

// // anonymous function, it has no name
// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// //passing parameter to an iffe function
// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

//////////////////////////////////
// Lecture Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// An inner function has always access to
// the variables and parameters of its outer
// function, even after the outer function
// has returned.

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(1990);

var retirementIceland = retirement(67);
retirementIceland(1990);

// retirement(66)(1990);

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         //anonymous function, it has no name
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', ')
//         }
//     }
// }

function interviewQuestion (job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');