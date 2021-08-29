// alert("Black Jack App!!");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let firstCard = 16;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
   if (sum <= 20) {
      message = "Do You want to draw a new Card?";
      isAlive = false;
   } else if (sum === 21) {
      message = "You have WON, you got BlackJack!!!";
      hasBlackJack = true;
   } else {
      message = "Sorry You are out of the Game!!!";
      isAlive = false;
   }
   cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;
   sumEl.textContent = `Sum: ${sum}`;
   messageEl.textContent = message;
   console.log(sum);
   console.log(message);
   console.log(`has BlackJack: ${hasBlackJack}`);
   console.log(`is alive in the game: ${isAlive}`);
}

// let age = 12;

// if (age >= 21) {
//    console.log("Welcome, have some Beer");
// } else {
//    console.log("Sorry, You are not allowed to drink Beer!");
// }

// let ageValue = 102;

// if (ageValue < 100) {
//    console.log("Not elegible to get Card from King");
// } else if (ageValue === 100) {
//    console.log("Here is your Birthday Card from the King");
// } else {
//    console.log("You have already gotten One");
// }
