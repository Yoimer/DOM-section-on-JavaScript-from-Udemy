/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

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

document.querySelector('.dice').style.display = 'none';

// another way to look for ID (which is a bit faster)

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


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

    //1. Random number
    // generates a random number from 1 to 6 and round it (does not return a decimal number, just an integer)
    var dice = Math.floor(Math.random() * 6 ) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT a 1
    
});

