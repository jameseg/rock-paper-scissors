function playGame() {
  let computerScore = 0
  let humanScore = 0

  function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const computerChoice = Math.floor((Math.random() * 3))

    console.log(options[computerChoice])
    return options[computerChoice]
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
          message = `You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScore++
          console.log(message)

        } else if (computerChoice === "rock") {
          message = `You tied :( ${humanChoice} is the same as ${computerChoice}.`
          console.log(message)
        }
        else if (computerChoice === "paper") {
          message = `You lose! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScore++
          console.log(message)
        }
        break;
      case "scissors":
        if (computerChoice === "scissors") {
          message = `You tied :( ${humanChoice} is the same as ${computerChoice}.`
          console.log(message)
        } else if (computerChoice === "rock") {
          message = `You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScore++
          console.log(message)
        }
        else if (computerChoice === "paper") {
          message = `You lose! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScore++
          console.log(message)
        }
        break;

      case "paper":
        if (computerChoice === "scissors") {
          message = `You lose! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScore++
          console.log(message)
        } else if (computerChoice === "rock") {
          message = `You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScore++
          console.log(message)
        }
        else if (computerChoice === "paper") {
          message = `You tied :( ${humanChoice} is the same as ${computerChoice}.`
          console.log(message)
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
    console.log(`You win the game! You had ${humanScore} and the machine had ${computerScore} - Nice job!`)
  } else if (computerScore > humanScore) {
    console.log(`You got creamed. You had ${humanScore} and the machine had ${computerScore} - you need practice`)
  } else {
    console.log("You tied the machine. Maybe play again?")
  }
}

playGame()


