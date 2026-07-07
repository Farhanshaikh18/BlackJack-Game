let firstCard = 11
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

function renderGame(){
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You have got a BlackJack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent = "Sum: "+sum
}

function startGame(){
  renderGame()  
}


function newCard(){
    let card = 10
    sum += card
    cards.push(card)
    renderGame()
}