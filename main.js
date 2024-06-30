function playGame() {
  let computerScore = 0
  let humanScore = 0

  function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const computerChoice = options[Math.floor((Math.random() * 3))]

    console.log(computerChoice)
    return computerChoice
  }

  function getHumanChoice() {
    const humanChoice = prompt("ROCK, PAPER, or SCISSORS?").toLowerCase()

    console.log(humanChoice)
    return humanChoice

  }

  // rounds played from human's perspective
  function playRound(humanChoice, computerChoice) {

    let message = ""
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScore++
          alert(message)

        } else if (computerChoice === "rock") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You tied :( ${humanChoice} is the same as ${computerChoice}.`
          alert(message)
        }
        else if (computerChoice === "paper") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You fool! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScore++
          alert(message)
        }
        break;
      case "scissors":
        if (computerChoice === "scissors") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You tied :( ${humanChoice} is the same as ${computerChoice}.`
          alert(message)
        } else if (computerChoice === "rock") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScore++
          alert(message)
        }
        else if (computerChoice === "paper") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You fool! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScore++
          alert(message)
        }
        break;

      case "paper":
        if (computerChoice === "scissors") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You fool! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScore++
          alert(message)
        } else if (computerChoice === "rock") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScore++
          alert(message)
        }
        else if (computerChoice === "paper") {
          message = `YOU: ${humanChoice} | COMPUTER: ${computerChoice} You tied :( ${humanChoice} is the same as ${computerChoice}.`
          alert(message)
        }
        break;
      default:
        return new Error(`You need to select ROCK, PAPER, or SCISSORS | you selected: ${humanChoice}`)
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  if (humanScore > computerScore) {
    alert(`You win the game! You had ${humanScore} and the machine had ${computerScore} - Nice job!`)
  } else if (computerScore > humanScore) {
    alert(`You got creamed. You had ${humanScore} and the machine had ${computerScore} - you need practice`)
  } else {
    alert("You tied the machine. Maybe play again?")
  }
}

playGame()


