const btn = document.querySelector("button")
const guessNumbers = document.querySelector("input")
const balanceTurn = document.querySelector("#remainTurn")
const gMessage = document.querySelector("#message")
const previousNumber = document.querySelector("#previousNumber")


let remainingTurn = 10;

let systemNumber = 15;

let previouslyGuessNumber= 0;

let message = "";





btn.addEventListener("click", (e) => {
  e.preventDefault()
  btn.textContent = "Check Number"
  
  function guessNumber() {
    if (remainingTurn <= 10 && remainingTurn > 1) {
      if (systemNumber > guessNumbers.value) {
        message = "Too Low"
        gMessage.textContent = `Message: ${message}`
        remainingTurn = remainingTurn - 1
        balanceTurn.textContent = `Remaining Turn : ${remainingTurn}`
        previousNumber.textContent = `Previous number: ${guessNumbers.value}`
      } else if (systemNumber < guessNumbers.value) {
        message = "Too High"
        gMessage.textContent = `Message: ${message}`
        remainingTurn = remainingTurn - 1
        balanceTurn.textContent = `Remaining Turn : ${remainingTurn}`
        previousNumber.textContent = `Previous number: ${guessNumbers.value}`
      } else {
        message = "You Won!!!"
        gMessage.textContent = `Message: ${message}`
        reset()
      }
    } else {
      message = "Game Over"
      btn.textContent = "Try Again"
      reset()
    }

    guessNumbers.value= ""
    return message
  }

  guessNumber()


})

function randomNumbers() {
  return Math.trunc(Math.random() * 100) + 1
}

function reset(){
    btn.textContent = "Restart Game"
    systemNumber = randomNumbers()
    remainingTurn = 10
    balanceTurn.textContent = `Remaining Turn : ${remainingTurn}` 
    previousNumber.textContent = `Previous number: 0`  
}