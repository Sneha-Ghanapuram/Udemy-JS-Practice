'use strict';

// DOM and DOM Manipulation.

console.log(document.querySelector('.message'));

//NOTES:
// querySelector is the query save in document object. (.message) is the class name def in html
// In the output if we wnt to see only the text, than add 'textContent'

console.log(document.querySelector('.message').textContent);

// NOTES: 
// What is DOM ??
// - Stands for Document Obect Model. Structured represntation of HTML documents.
// - Allows JS to access HTML elements and Styles to Manipulate them. 😊 (windows + .)

// Now, we will change "Start guessing..." to 'Correct number'.

// document.querySelector('.message').textContent = '🎉 Correct Number!'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 10;

// Now we will change the input property which is in guess class.
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// here, for input property we write value.


// EVENT: is something that happens on the page. Ex: mouse oving or a key press etc.
// EVENt LISTENER: we can wait for a certain event to happen an react to it.
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(typeof guess);
    // Whatever we entered by user will be String.
    document.querySelector('.message').textContent = '🎉 Correct Number!'
})
// (enter any number in the input box and click on "check" to see the result.)

// In order to compare the user enter number with the randomly genereated number, convert the string to the number.

document.querySelector('.check').addEventListener('click', function() {
    const guesss = Number(document.querySelector('.guess').value);
    console.log(guesss, typeof guesss);

    if (!guesss) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }  
})

// Now we need to generate the randomn number which we compare with the user input.
// math.random :- always generates the number from 0 to 1. In order to generate the number from 1 to 20, we multiply by 20.
// math.trunc :- removes the decimals
// math.trunc(math.randomn()*20). This genrates number from 0 to 19.
// Inorder to get the number from 1 to 20 we need to add 1.
// math.truc(math.randomn()*20)+1

/*
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const gues = Number(document.querySelector('.guess').value);
    console.log(gues, typeof gues);

    // When there is no input.
    if (!gues) 
    {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } 
    // When player wins
    else if (gues === secretNumber)
    {
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        // Once the guess number is correct then the secret number should be visbile.
        document.querySelector('.number').textContent = secretNumber;

        // Change the background color to Green.
        document.querySelector('body').style.backgroundColor = '#239B56'; 

        // Increase the width of the box.
        document.querySelector('.number').style.width = '30rem'; 

        // Save the Highscore.
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } 
    // When guess is Too high.
    else if (gues > secretNumber) 
    {
        if ( score > 0)
        {
            document.querySelector('.message').textContent = '📈 Too high';
            // Decrease the score by one for every wrong attempt
            score --;
            document.querySelector('.score').textContent = score;
        } 
        else 
        {
            // When the score is 0.
            document.querySelector('.message').textContent = 'You lost the game';
        }
    } 
    // when guess is Too low
    else if (gues < secretNumber) 
    {
        if ( score > 0)
        {
            document.querySelector('.message').textContent = '📉 Too low';
            // Decrease the score by one for every wrong attempt
            score --;
            document.querySelector('.score').textContent = score;
        }    
    } 
    else 
    {
        // When the score is 0.
        document.querySelector('.message').textContent = 'You lost the game';
       
    }   
});    

*/

// Code Challenge #1

/* Implement a game rest functionality, so that the player cn make a new guest! Here is how:

1. Select the element in the 'again' class and attach the click event handler.
2. In the handler function, restore initial values of the score and secret number variables.
3. Restore the initial conditons of the message, number, score and guess input field.
4. Also restore the original background color (#222) and the number width (15rem)
*/


// Click on Again, should go back to the beginning of the game.

/*
document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
});
*/


// We have to implement DRY policy in our code, by using REFACTORING (use to remove duplicate code).

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

// As we have multiple times, we can create a function and call it whenever needed. Can do same for all .number , .guess etc
const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const gues = Number(document.querySelector('.guess').value);
    console.log(gues, typeof gues);

    // When there is no input.
    if (!gues) 
    {
        //document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');
    } 
    // When player wins
    else if (gues === secretNumber)
    {
        displayMessage('🎉 Correct Number!');

        // Once the guess number is correct then the secret number should be visbile.
        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor = '#239B56'; 
        document.querySelector('.number').style.width = '30rem'; 

        // Save the Highscore.
        if(score > highscore) 
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } 
    // When the guess is wrong
    else if ( gues != secretNumber)
    {
        if ( score > 0)
        {
            displayMessage( gues > secretNumber ? '📈 Too high' : '📉 Too low');
            // Decrease the score by one for every wrong attempt
            score --;
            document.querySelector('.score').textContent = score;
        } 
        else 
        {
            // When the score is 0.
            displayMessage('You lost the game');
        }
    }
});    
document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
});
