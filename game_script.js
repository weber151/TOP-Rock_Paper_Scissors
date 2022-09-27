let computerChoice = "null";

function getComputerChoice(computerChoice) {
    //Generate rock, paper or scissors for NPC
    Choice_Helper = Math.floor(Math.random()*100)
    if (Choice_Helper < 33) {
        return computerChoice = "Rock";
    }
    else if (Choice_Helper > 33 && Choice_Helper < 66) {
        return computerChoice = "Scissors";
    }
    else {
        return computerChoice = "Paper";
    }
}

console.log(getComputerChoice());