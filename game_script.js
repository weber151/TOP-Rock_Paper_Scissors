function getcomputerSelection() {
    //Generate rock, paper or scissors for NPC
    Choice_Helper = Math.floor(Math.random()*100)
    if (Choice_Helper < 33) {
        return "rock";
    }
    else if (Choice_Helper > 33 && Choice_Helper < 66) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

// ** BELOW USED FOR TYPED INPUT BY PLAYER
// function playerSelectionCheck(playerInput) {
//     if (playerInput.toLowerCase() === "rock") {
//         return playerInput.toLowerCase();
//     }
//     else if (playerInput.toLowerCase() === "scissors") {
//         return playerInput.toLowerCase();
//     }
//     else if (playerInput.toLowerCase() === "paper") {
//         return playerInput.toLowerCase();
//     }
//     else {
//         console.log(playerInput.toLowerCase() + " Error!!");
//         return;        
//     }
// }

function selectWinner(computerPlayer, playerOne) {
    let result = null;
    
    const ifVal = (a, b, w) =>
        computerPlayer === a && playerOne === b ? (result = w) : null;

    ifVal("rock", "scissors", "Loser!");
    ifVal("scissors", "paper", "Loser!");
    ifVal("paper", "rock", "Loser!");
    ifVal("scissors", "rock", "Winner!");
    ifVal("paper", "scissors", "Winner!");
    ifVal("rock", "paper", "Winner!"); 
    ifVal("rock", "rock", "Draw!");
    ifVal("scissors", "scissors", "Draw!");
    ifVal("paper", "paper", "Draw!")
    
    return result;
}

function playGame() {
    
    let playerWins = 0;

    for (let i = 0; i < 5; i++) {
        if (playerWins < 3){
            let playerInput = prompt("Are you a rock, paper or scissors? ")
            const playerSelection = playerSelectionCheck(playerInput); // btn input
            const computerSelection = getcomputerSelection();
            let roundResult = selectWinner(computerSelection, playerSelection);
            if (roundResult == 'Winner!') {
                playerWins = playerWins +1;
            }
            else if (roundResult == 'Loser!') {
                playerWins = playerWins -1;
            }                  
            console.log(playerSelection);
            console.log(computerSelection);
            console.log(roundResult)
        }
        else if (playerWins == -3) {
            return console.log('You lost the game.');
        }  
        else {
            return console.log('You won the game!');
        } 

    }
    function gameCount(count) {
        return (count > 0 ? 'You won! Barely...' : 'You lost! Barely...');
    }
    console.log(gameCount(playerWins));
    console.log(playerWins);
    
}

function displayText(m) {
    const computerSelection = getcomputerSelection();
    let roundResult = selectWinner(computerSelection,m.textContent);
    console.log(roundResult);
}
const rpsBtn = document.querySelectorAll('.gameBtn');
rpsBtn.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){displayText(currentBtn)});
})


