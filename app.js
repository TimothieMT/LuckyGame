let credits = 100
let displayCredits = document.querySelector(".credits")
const displayResult = document.querySelector(".result")

function roll() {
    
    const dice = Math.round(Math.random() * 6)

   
    
    if (dice == 6) {
        credits = credits + 5
        displayCredits.innerHTML = credits
        displayResult.innerHTML = dice
    } else {
        credits = credits - 1
        displayCredits.innerHTML = credits
        displayResult.innerHTML = dice
    }

    return credits
}

function resetValue() {
    
    displayCredits.innerHTML = 100
    
    return displayCredits
}