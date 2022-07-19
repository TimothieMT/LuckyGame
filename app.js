let credits = 200
let displayCredits = document.querySelector(".credits")
const displayResultOne = document.querySelector(".resultOne")
const displayResultTwo = document.querySelector(".resultTwo")
const displayResultThree = document.querySelector(".resultThree")


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  

function roll() {


    let i = 6;
    let face = Array.from({length: i}, (_, i) => i + 1);
    for(i=1;i< 6;i++) {
    face[i] = new Image();
    face[i].src="./dice-" + (i+1) + "-solid.svg";
    }

    let a = getRandom(1, 6)
    let b = getRandom(1, 6)
    let c = getRandom(1, 6)
    
    const cubepicOne = document.querySelector(".resultOne").src=eval("face["+a+"].src")
    const cubepicTwo = document.querySelector(".resultTwo").src=eval("face["+b+"].src")
    const cubepicThree = document.querySelector(".resultThree").src=eval("face["+c+"].src")
 
    if (a == 3 && b == 3 && c == 3 ) {
        credits = credits + 200
        displayCredits.innerHTML = credits + " €"
        displayResultOne.innerHTML = cubepicOne
        displayResultTwo.innerHTML = cubepicTwo
        displayResultThree.innerHTML = cubepicThree
    } else {
        credits = credits - 1
        displayCredits.innerHTML = credits + " €"
        
    }

    return credits
}

function resetValue() {
    
    displayCredits.innerHTML = 200 + " €"
   
    
    return displayCredits
}




