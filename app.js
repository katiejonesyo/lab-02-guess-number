// import functions and grab DOM elements
import { compareNumbers } from './compare-numbers.js';

const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('number-input');
const results = document.getElementById('results');
const resetButton = document.getElementById('reset-button');

// initialize state
let totalGuesses = 3;
let correctNumber = Math.floor(Math.random() * 15);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    totalGuesses--;

    const guess = userGuess.valueAsNumber;
    const comparedResult = compareNumbers(guess, correctNumber);

    // LOSE
    if (totalGuesses === 0) {
        document.getElementById("guess-button").disabled = true;
        return results.textContent = 'You are out of guesses! You lose!';
    }

    //TOO HIGH
    if (comparedResult === 1) {
        return results.textContent = `Too high, my friend! Guesses remaining: ${totalGuesses}`;
    }

    //TOO LOW
    if (comparedResult === -1) {
        return results.textContent = `Ah man, too low! Guesses remaining: ${totalGuesses}`;
    }

    // WIN
    if (comparedResult === 0) {
        document.getElementById("guess-button").disabled = true;
        return results.textContent = 'Niceeeee you got it!';
        
            
    }

// This was me trying out an option to change the background for win or lose options. It didn't work the way I wanted it to. //
function changeBackground() {
    document.getElementById('results').style.background = 'green'
}






    document.getElementById('number-input').value = '';
});

// RESET
resetButton.addEventListener('click', () => {
    document.location.reload();
});