// getComputerChoice
//    randomly returns rock, paper, or scissors by using Math.random
function getComputerChoice() {
  let computersChoice_number = Math.floor(Math.random() * 3);
  let computersChoice = "";

  if (computersChoice_number === 0) {
    computersChoice = "rock";
  } else if (computersChoice_number === 1) {
    computersChoice = "paper";
  } else {
    computersChoice = "scissors";
  }
  console.log("Computer choose " + computersChoice);
  return computersChoice;
}
// getHumanChoice
//    returns a user's choice in lowercase or prompts user for a
//    different choice if input is invalid
function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or Scissors? ");

  if (
    humanChoice.toLowerCase() == "rock" ||
    humanChoice.toLowerCase() == "paper" ||
    humanChoice.toLowerCase() == "scissors"
  ) {
    humanChoice = humanChoice.toLowerCase();
  } else {
    alert("That's not a valid choice. Try again.");
    humanChoice = prompt("Rock, paper, or Scissors? ");
  }

  console.log("You chose " + humanChoice.toLowerCase());
  return humanChoice.toLowerCase();
}
// *********************** playGame fcn ****************************
//
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  console.log("Loading...\n\n");

  // Play 5 rounds
  for (i = 1; i <= 5; i++) {
    console.log("*****************");
    console.log("round " + i);
    console.log("*****************\n\n");

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("--------------------");
    console.log("your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
    console.log("--------------------\n\n");
  }

  console.log("*****************");
  console.log("Game ended");
  console.log("*****************\n\n");

  if (humanScore > computerScore) {
    console.log("You win!");
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
  } else if (humanScore == computerScore) {
    console.log("It's a tie!");
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
  } else {
    console.log("*****************");
    console.log("You lose!");
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
  }

  //***************************************************************
  // playRound
  //    updates humanScore and computerScore each round depending
  //    on the selection made
  //***************************************************************
  function playRound(humanChoice, computerChoice) {
    // player chooses rock
    console.log("\n");
    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
      } else if (computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
      } else {
        console.log("It's a tie! Rock vs. Rock");
      }
      // player chooses paper
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
      } else if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      } else {
        console.log("It's a tie! Paper vs. Paper");
      }
      // player chooses scissors
    } else {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      } else if (computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
      } else {
        console.log("It's a tie! Scissors vs. Scissors");
      }
    }
    // else {
    //console.log("something went wrong");
    //}
  } // END OF playRound
} // ********************* END of playGame fcn **********************
playGame();
