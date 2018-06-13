// BUDGET CONTROLLER
var budgetController = (function() {

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn'
    };

    return {
        getinput: function() {
            // the object returns 3 methods
            // this is better than returning 3 variables
            return {
                //type will be either income or expense
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }

    };

})(); 

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        //console.log('Button was clicked');
        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    }

    //addEventListener calls ctrlAddItem for us
    // document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    //addEventListener does not call ctrlAddItem() since ctrlAddItem() is a callback
    // document.querySelector('.add__btn').addEventListener('click', ctrlAddItem())

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

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

