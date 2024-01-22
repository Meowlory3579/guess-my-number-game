'use strict';

// Beginning: Global variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (number) {
    document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const bodyBackgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};

const numberWidth = function (width) {
    document.querySelector('.number').style.width = width;
};
// End: Global variables


// Initialize function when user clicks 'Check!' button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!'); // document.querySelector('.message').textContent = '⛔️ No number!';

        // When the player wins      
    } else if (guess === secretNumber) {
        displaySecretNumber(secretNumber); //document.querySelector('.number').textContent = secretNumber;
        displayMessage('🥳 Correct Number!'); // document.querySelector('.message').textContent = '🎉 Correct Number!';
        bodyBackgroundColor('#60b347'); // document.querySelector('body').style.backgroundColor = '#60b347';
        numberWidth('30rem'); // document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'); // document.querySelector('.message').textContent =
            // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;
            displayScore(score); // document.querySelector('.score').textContent = score;
        } else {
            displayMessage('☹️ You lost the game!') // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayScore('0'); // document.querySelector('.score').textContent = 0;
        }
    }
});

// Reset game when user clicks 'Again!' button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...'); // document.querySelector('.message').textContent = 'Start guessing...';
    displayScore(score); // document.querySelector('.score').textContent = score;
    displaySecretNumber('?'); //document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    bodyBackgroundColor('#222'); // document.querySelector('body').style.backgroundColor = '#222';
    numberWidth('15rem'); // document.querySelector('.number').style.width = '15rem';
});

