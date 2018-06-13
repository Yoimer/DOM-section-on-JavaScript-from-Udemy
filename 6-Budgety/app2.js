// BUDGET CONTROLLER
var budgetController = (function() {

})();

// UI CONTROLLER
var UIController = (function() {
    // Some code
})(); 

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        //console.log('Button was clicked');
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It Works');
    }

    //addEventListener calls ctrlAddItem for us
    // document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    //addEventListener does not call ctrlAddItem() since ctrlAddItem() is a callback
    // document.querySelector('.add__btn').addEventListener('click', ctrlAddItem())

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    // this happends on the global document, anywhere in the document
    // the argument can have any name, I will use event
    document.addEventListener('keypress', function(event) {
        // entert button was pressed
        if (event.keyCode === 13 || event.which === 13) {
            // console.log('ENTER was pressed.');
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

