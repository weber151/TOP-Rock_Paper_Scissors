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

// **WHEN PLAYER INPUT TEXT IN CONSOLE LOG
// function playGame() {
    
//     let playerWins = 0;

//     for (let i = 0; i < 5; i++) {
//         if (playerWins < 3){
//             let playerInput = prompt("Are you a rock, paper or scissors? ")
//             const playerSelection = playerSelectionCheck(playerInput); // btn input
//             const computerSelection = getcomputerSelection();
//             let roundResult = selectWinner(computerSelection, playerSelection);
//             if (roundResult == 'Winner!') {
//                 playerWins = playerWins +1;
//             }
//             else if (roundResult == 'Loser!') {
//                 playerWins = playerWins -1;
//             }                  
//             console.log(playerSelection);
//             console.log(computerSelection);
//             console.log(roundResult)
//         }
//         else if (playerWins == -3) {
//             return console.log('You lost the game.');
//         }  
//         else {
//             return console.log('You won the game!');
//         } 

//     }
//     function gameCount(count) {
//         return (count > 0 ? 'You won! Barely...' : 'You lost! Barely...');
//     }
//     console.log(gameCount(playerWins));
//     console.log(playerWins);
    
// }



function playRound(m) {
    const computerSelection = getcomputerSelection();
    let roundResult = selectWinner(computerSelection,m.textContent);
    
    gameResult.textContent = roundResult;
    compChoice.textContent = "AI: "+computerSelection;
    playChoice.textContent = "You: "+m.textContent;
    if (roundResult == 'Winner!') {
        count++;
        wins++;
    }
    else if (roundResult == 'Loser!') {
        count++;
        losses++;
    }
    else {
        count++;
    }
}

const rpsBtn = document.querySelectorAll('.gameBtn');
const roundsDisp = document.querySelector('.rounds');

const playChoice = document.querySelector('#play');
const compChoice = document.querySelector('#comp');
const gameResult = document.querySelector('#result');

let count = 0;
let losses = 0;
let wins = 0;

function winState() {
    gameResult.textContent = "You won!"
    compChoice.textContent = "--";
    playChoice.textContent = "--";
}
function loseState() {
    gameResult.textContent = "You lose!"
    compChoice.textContent = "--";
    playChoice.textContent = "--";
}
function drawState() {
    gameResult.textContent = "It's a draw!"
    compChoice.textContent = "--";
    playChoice.textContent = "--";
}

function gameCount() {
    roundsDisp.innerHTML = count + "/5";
    if (count === 5) {
        if (wins > losses) {
            winState();
        }
        else if (wins < losses) {
            loseState();
        }
        else {
            drawState();
        }
        rpsBtn.forEach(function(currentBtn){
            currentBtn.disabled = true;
        })
    }
}

rpsBtn.forEach(function(currentBtn){
    currentBtn.addEventListener('click', 
        function(){
        playRound(currentBtn),
        gameCount()
        }
    );
})












