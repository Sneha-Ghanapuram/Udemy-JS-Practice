'use strict';
// Date: 27 Feb 2021

// Starting Elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1'); //Another way for writting id.
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

let scores, currentSore, activePlayer, playing;
// Starting Conditions

// score0.textContent = 0;
// score1.textContent = 0;
//diceE1.classList.add('hidden');

const init = function (){
    scores = [0,0];
    currentSore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceE1.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();

// Switch the user
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;  // Current score should be 0.
    currentSore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // Switch to the next player
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    // Toggle will add the class if it is missing or removes the class if it is already present.
}

// Rolling the dice
btnRoll.addEventListener('click', function (){
    if (playing) {
        // Random number
        const dice = Math.trunc(Math.random()*6)+1;
        console.log(dice);

        // Display the dice.
        diceE1.classList.remove('hidden');
        diceE1.src = `dice-${dice}.png`;

        // Check if the dice is one.
        if(dice !== 1) {
            currentSore += dice; // Add dice to current score.
            document.getElementById(`current--${activePlayer}`).textContent = currentSore; // Writting the id name dynamically.
        } else {
            switchPlayer();
        }
    }    
});

// Hold the Score.
btnHold.addEventListener('click', function(){
    if (playing){
        // Add the current score to active player
        scores[activePlayer] += currentSore;  // score[1] = score[1] + current Score.
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check the score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game.
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); // Winner
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); //Remove the active class

        }else{
            switchPlayer(); // Switch the player.
        }
    }  
})

// New Game
btnNew.addEventListener('click', init);