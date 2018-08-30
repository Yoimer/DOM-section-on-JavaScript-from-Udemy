// module pattern iife that will return an object with
// all the functions that we want it to be public
// remeber, an iffe is just an anonymous function wrapped in parenthesis
// also, iffe allows to have data privacy cos it creates a new scope
// that is not visible from the outside scope
var budgetController = (function() {
    // function body, here is where our code goes
    // these variables and functions can not be accessed from the outside
    // they all are private
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        // method called publicTest
        // to be used in the outside scope
        // this will be EXPOSED to the public
        publicTest: function(b) {
            return add(b);
        }
    }

})(); // here is where the function is invoked

// analysis
// when javascript run time hits the line 6 (var budgetController =...)
// it gets executed , and the anonimous function is inmediately called
// or invoked, because of the (); operator at the very end.
// var x and add () function are declared and will return an object which is:
//        publicTest: function(b) {
//     console.log(add(b));
// }
// containing the publicTest method
// could be also a numberless amount of methods, not only publicTest of course
// so thisobject is what gets assigned to the budgetController variable
// after the function returns.
// again, after all of this runs, the budgetController variable, is simply
// an object containing the method called publiTest because that is what 
// we return from the function() {
    // var x = 23;
    // var add = function(a) {
    //     return x + a;
    // }

    // return {
    //     publicTest: function(b) {
    //         console.log(add(b));
    //     }
    // }

//publicTest uses x and add value even after
// this function is executed.
//why does this work?
//why is this so powerful?
// this is cos of closure
// Remember, because of closures
// an inner function has always access
// to the variable and parameters
// of its outer function,
// even after the outer function
// has returned.
// and that's what happends here
// so the iife returns immediately
// and so it's effectively gone.
// but the public:Test function (which is a method)
// that is returned, will always have access
// to the x variable and the add function
// because a closure was created here.
// that's why we say that the public method
// is public, because it was returned
// and now we can use it
// but the x and add function are private
// because in the clouse and therefore only the publicTest method
// can access to them.,so again, all of this works
// because of a closure.
// so the x variable and the function are in the closure
// even after the iife has returned
// end of analysis


/////////////another module
var UIController = (function() {
    // Some code
})(); 

////////another module
var controller = (function(budgetCtrl, UICtrl) {
    //Some code
    //function(budgetCtrl, UICtrl) could have been the same name
    // like budgetController and UIController
    // however, this is not a good practice since
    // we want the modules to be as indepent as possible
    // so if for any cause we decided to change
    // the name of the budgetController, it would have to be changed
    // in this module as well in all the places it has been used.

    var z = budgetCtrl.publicTest(5);

    // since it can not be used outside of this scope
    // we need to use a return method as we did in budgetController
    // this is the only way to have access to z
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);




