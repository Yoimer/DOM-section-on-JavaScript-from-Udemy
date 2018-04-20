/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

/*
querySelector lets us select stuff exactly the way we do it in css
the only difference is, it only selects the first element that it
finds (a solution for that will come out later though)
*/

/*
.textContent let us change only plain text, not html text

.innerHTML  let us change html in a correct way '<em>' + dice + '</em>' would change dice in italic

*/

// this would show dice in italic
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


// this would show html content in a bad way
//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';


//document.querySelector('#current-0').textContent = dice; no dynamic

// shows dice dynamically from the activePlayer variable
//document.querySelector('#current-' + activePlayer).textContent = dice;


// reads elements from our web page and stores it in some variable for example
//console.log(document.querySelector('#score-0').textContent);

// let's remove the dice from the page when it initializes

/*
- '.dice' means the class dice, and id would have used a #
- style method
- .display is the css property
- 'none' is the value of the display property

*/

// ---------------------addEventListener explanation with the callback function definition

// example of what a callback function is
// imagine we want a function to be called when we click a button

//function btn() {
    // Do something here
//}

// calling the btn function
//btn();

// the correct way to call the function would be like this:
//document.querySelector('.btn-roll').addEventListener('click', btn);

// the incorrect way would be like this:
//document.querySelector('.btn-roll').addEventListener('click', btn());

// We don't want the function the called here.
// We want it to be called BY THE addEventListener

// the correct way to call the function would be like this:

//document.querySelector('.btn-roll').addEventListener('click', function() {
//    
//});

// -----------------------this is another concept, anonymous function
// which is a function that does not have a name
// and we can not use it outside this context here

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        //1. Random number
        // generates a random number from 1 to 6 and round it (does not return a decimal number, just an integer)
        var dice1 = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;

        //2. Display the result
        // the document.querySelector selects only the first occurrence
        // of the element in the string (.'dice') in our case.
        // We could select the document.querySelector.All()
        // and then use a for or while loop to loop through
        // the results. We'll do that on the next project
        // for now, let's keep things simpler.
        //var diceDOM = document.querySelector('.dice');
        // shows dices using 'block'
        //var diceDOM = document.querySelector('.dice');
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        //diceDOM.style.display = 'block';
        //diceDOM.src = 'dice-' + dice + '.png';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            //roundScore += dice;
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next Player
            nextPlayer();
        }
        /*if (dice === 6 && lastDice === 6) {
            // Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next Player
            nextPlayer();
        }
        lastDice = dice;
        */
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, bull or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //document.querySelector('.dice').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }
    }

});

function nextPlayer() {
    // Next Player
    // ternary operator
    // if activePlayer === 0 then change it to 1, else change it to 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // reset current score for both players when any of them gets a 1
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // remove a class 
    // this will remove the active class when getting 1 on dice
    // it will also deactive the gray background
    // the red dot and also the bolded player name
    //document.querySelector('.player-0-panel').classList.remove('active');

    // add a class
    // this will add the active class on the next player
    // it will also active the gray background on the actual player
    // show the red dot and will bold the player name
    //document.querySelector('.player-1-panel').classList.add('active');

    // another way to play with classes is using the toggle method
    // what toggle does is to add another class if it is not there
    // and if it is there, then remove it
    // toggle a class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice when any of the players gets a 1
    //document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init );

function init () {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    //document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


/*
YOUR 3 CHALLENGES
Change the game the follow these rules:

1. A player looses his ENTIRE score when he rools two 6 in a row. After that, it's the next
player's turn. (Hint: always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where the players can set the winning score, so that they
change the predefined score of 100. (Hint: you can read that value with the .value property in Javascript. This is a good oportunity to use google to figure this out: )

3. Add another dice to the game, so that there are two dices now. The player looses his current
score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.
*/
