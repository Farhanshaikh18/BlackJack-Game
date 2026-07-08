let player = {
    name : "Farhan",
    chips : 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")
playerEl.innerText = player.name+": $"+player.chips


function getRandomCard(){
    let number =  Math.floor(Math.random()*13 + 1)
    if(number === 1){
        return 11
    } 
    else if (number === 11 | number === 12 | number === 13){
        return 10
    } 
    else { 
        return number
    }
    
}


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
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()  
    isAlive = true
}


function newCard(){
    if(isAlive && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

if(isAlive && hasBlackJack === false){
    newCard()
}