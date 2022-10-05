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

function playerSelectionCheck(playerInput) {
    if (playerInput.toLowerCase() === "rock") {
        return playerInput.toLowerCase();
    }
    else if (playerInput.toLowerCase() === "scissors") {
        return playerInput.toLowerCase();
    }
    else if (playerInput.toLowerCase() === "paper") {
        return playerInput.toLowerCase();
    }
    else {
        console.log(playerInput.toLowerCase() + " Error!!");
        return;        
    }
}

const removeFromArray = function(array, arg) {
    
    for (let x = 0; x < arguments.length; x++) {
        arg = arguments[x+1];
        console.log(arg);
        newArray = array;
        let i = 0;
        while (i < newArray.length) {
            if (newArray[i] === arg) {
                newArray.splice(i, 1);
            }
            else {
                i++;
            }
        }
    }
    return newArray;
};

let myArr = [1, 2, 3, 4];

console.log(removeFromArray(myArr, 3));
console.log(myArr);


/*
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
    
    return result;
}

function playGame() {
    
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Are you a rock, paper or scissors? ")
        const playerSelection = playerSelectionCheck(playerInput);
        const computerSelection = getcomputerSelection();
        let roundResult = selectWinner(computerSelection, playerSelection);
    

        console.log(playerSelection);
        console.log(computerSelection);
        console.log(roundResult)
    }
    
}

playGame();
*/