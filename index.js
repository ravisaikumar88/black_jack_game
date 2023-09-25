

let cards = []
let sum = 0
let isBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandom(){
    let randomvalue = Math.random() * 13 + 1
    let floorValue = Math.floor(randomvalue)
    
    if(floorValue === 1){
        return 11
    }
    if(floorValue>=11 && floorValue<=13){
        return 10
    }
    return floorValue
}

function startGame(){
    if(!isAlive){
        isAlive = true
        let firstCard = getRandom()
        let secondCard = getRandom()
        sum = firstCard + secondCard
        cards.push(firstCard,secondCard)
        renderGame()
    }
}

function renderGame(){
    cardEl.textContent = "Cards: " 
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    if(sum <= 20){
        message = "Do you want to Draw Another Card?"
    }
    else if(sum === 21){
        message = "woooha!!You've won the game"
        isBlackJack = true
        isAlive = false
        cards = []
    }
    else{
        message = "You're out of the game!"
        isAlive = false
        cards = []
    }
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")

    if(isAlive && !isBlackJack){
        let card = getRandom()
        sum += card
        cards.push(card)
        renderGame()
    }
}