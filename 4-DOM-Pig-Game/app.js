/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// generates a random number from 1 to 6 and round it (does not return a decimal number, just an integer)
dice = Math.floor(Math.random() * 6 ) + 1;

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
document.querySelector('#current-' + activePlayer).textContent = dice;


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
