function playGame() {
  function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor((Math.random() * 3))
    const computerChoice = options[randomNumber]

    return computerChoice
  }

  const buttons = document.querySelectorAll("button")
  const humanScoreDiv = document.querySelector(".human-score")
  const computerScoreDiv = document.querySelector(".computer-score")
  const tiesDiv = document.querySelector(".ties")
  const messageDiv = document.querySelector(".message > span")
  const rulesAndEndMessage = document.querySelector(".rules")

  humanScoreDiv.textContent = 0
  computerScoreDiv.textContent = 0
  tiesDiv.textContent = 0


  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const humanChoice = e.target.textContent.toLowerCase()
      playRound(humanChoice, getComputerChoice())
    })
  });

  // rounds played from human's perspective
  function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScoreDiv.textContent++

        } else if (computerChoice === "rock") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You tied :( ${humanChoice} is the same as ${computerChoice}.`
          tiesDiv.textContent++
        }
        else if (computerChoice === "paper") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You fool! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScoreDiv.textContent++
        }
        break;
      case "scissors":
        if (computerChoice === "scissors") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You tied :( ${humanChoice} is the same as ${computerChoice}.`
          tiesDiv.textContent++
        } else if (computerChoice === "rock") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You fool! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`

          humanScoreDiv.textContent++
        }
        else if (computerChoice === "paper") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You win! ${humanChoice} beats ${computerChoice} every time!`
          computerScoreDiv.textContent++
        }
        break;

      case "paper":
        if (computerChoice === "scissors") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You fool! why would you pick ${humanChoice} if the computer picked ${computerChoice}?`
          computerScoreDiv.textContent++
        } else if (computerChoice === "rock") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You win! ${humanChoice} beats ${computerChoice} every time!`
          humanScoreDiv.textContent++
        }
        else if (computerChoice === "paper") {
          messageDiv.textContent = `YOU: ${humanChoice} | COMPUTER: ${computerChoice}\n You tied :( ${humanChoice} is the same as ${computerChoice}.`
          tiesDiv.textContent++
        }
        break;
      default:
        return new Error(`You need to select ROCK, PAPER, or SCISSORS | you selected: ${humanChoice}`)
    }


    const body = document.querySelector("body")
    if (humanScoreDiv.textContent === "5") {
      body.style.backgroundColor = "lightgreen"
      rulesAndEndMessage.textContent = `You win the game! You had ${humanScoreDiv.textContent} and the machine had ${computerScoreDiv.textContent} - Nice job!`
      humanScoreDiv.textContent = 0
      computerScoreDiv.textContent = 0
    } else if (computerScoreDiv.textContent === "5") {
      body.style.backgroundColor = "red"
      rulesAndEndMessage.textContent = `You got creamed. You had ${humanScoreDiv.textContent} and the machine had ${computerScoreDiv.textContent} - you need practice`
      humanScoreDiv.textContent = 0
      computerScoreDiv.textContent = 0
    }
  }
}

playGame()


