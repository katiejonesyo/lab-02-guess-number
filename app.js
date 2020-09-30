
import { compareNumbers } from './compare-numbers.js';

const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('number-input');
const results = document.getElementById('results');
const resetButton = document.getElementById('reset-button');


let totalGuesses = 3;
let correctNumber = Math.floor(Math.random() * 10);


guessButton.addEventListener('click', () => {
    totalGuesses--;

    const guess = userGuess.valueAsNumber;
    const comparedResult = compareNumbers(guess, correctNumber);

   
    if (totalGuesses === 0) {
        document.getElementById("guess-button").disabled = true;
        return results.textContent = 'You are out of guesses! You lose!';
    }

   
    if (comparedResult === 1) {
        return results.textContent = `Too high, my friend! Guesses remaining: ${totalGuesses}`;
    }

   
    if (comparedResult === -1) {
        return results.textContent = `Ah man, too low! Guesses remaining: ${totalGuesses}`;
    }

  
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


resetButton.addEventListener('click', () => {
    document.location.reload();
});