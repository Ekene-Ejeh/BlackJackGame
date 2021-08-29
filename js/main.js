// blackJackGame
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let firstCard = 12;
let secondCard = 2;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
   renderGame();
}

function renderGame() {
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
   cardsEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`;
   sumEl.textContent = `Sum: ${sum}`;
   messageEl.textContent = message;
   console.log(sum);
   console.log(message);
   console.log(`has BlackJack: ${hasBlackJack}`);
   console.log(`is alive in the game: ${isAlive}`);
}

function newCard() {
   console.log("Drawing a new Card from the deck. ");
   let card = 7;
   sum += card;
   startGame();
}
