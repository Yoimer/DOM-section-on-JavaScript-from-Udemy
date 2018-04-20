// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor
// They're always started with a capital letter (uppercase)
// the function paramaters are the variable we want to set in our object
// 
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this part of the code was comented on purpose
    // read below why we did so.
    /*this.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
    }*/
}

// explanation of the above comented section:
// inheritance in practice :)
// all the methods and properties we want to
// be inherited we can add'em in the
// object.prototype method (Person.prototype)
// none of the objects has attached the calculateAge method
// to them. But still, they're going to be able to use it.
// They will have access to it because it is in their prototype
// the calculateAge method is no longer on our constructor
// but we can still use it, and that's because it is in the
// prototype property of our function construction.
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

// adding a property to be inherited to
// not used that much, but still it will work
// as a method would
Person.prototype.lastName = 'Smith';

// this is how we create new objects using the construction function
// this is instantiation.
// the john object is an intance of the Person constructor(called class in another languages)
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

// explanation
// when using the new keyword, a new empty object is created
// then the construction function is called (in this case is Person) with the arguments
// we specified.
// as we must know, calling a function, creates a new execution context
// that also has .this variable.
// when function is not returning anything, like 
// clearly this case is, then the result is simply
// the object we created in the first place, the new empty object
// now, the john var has the propierties from new.

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);