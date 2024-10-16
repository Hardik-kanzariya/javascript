document.getElementById('submit').addEventListener('click', playGame);

function playGame() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let guessedCorrectly = false;
    
    do {
        const userInput = parseInt(document.getElementById('guess').value);
        
        if (userInput === randomNum) {
            document.getElementById('message').innerText = 'You won the game! 🎉 Play again!';
            guessedCorrectly = true;
        } else {
            document.getElementById('message').innerText = 'Try again!';
        }
    } while (!guessedCorrectly);
}
