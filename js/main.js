// blackJackGame
let messageElement = document.getElementById("message-el");
let cardsElement = document.getElementById("cards-el");
let sumElement = document.getElementById("sum-el");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function getRandomCard() {
   let getRandomCard = Math.floor(Math.random() * 13) + 1;
   if (getRandomCard === 1) {
      return 11;
   } else if (getRandomCard > 10) {
      return 10;
   } else {
      return getRandomCard;
   }
}

function startGame() {
   isAlive = true;
   firstCard = getRandomCard();
   secondCard = getRandomCard();
   cards = [firstCard, secondCard];
   sum = firstCard + secondCard;
   renderGame();
}

function renderGame() {
   cardsElement.textContent = "cards: ";
   for (let index = 0; index < cards.length; index++) {
      cardsElement.textContent += cards[index] + " ";
   }

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
   sumElement.textContent = `Sum: ${sum}`;
   messageElement.textContent = message;
   console.log(sum);
   console.log(message);
   console.log(`has BlackJack: ${hasBlackJack}`);
   console.log(`is alive in the game: ${isAlive}`);
}

function newCard() {
   console.log("Drawing a new Card from the deck. ");
   let card = getRandomCard();
   sum += card;
   cards.push(card);
   console.log(cards);
   renderGame();
}

// introduction to Arrays
// let experience = [
//    "Web Development",
//    "Software Development",
//    "Construction",
//    "Cat Fish farming",
// ];

// let cards = [7, 4];
// cards.push(5);
// console.log(cards);

// console.log(experience);
//for loop
// for (let index = 0; index < experience.length; index++) {
//    const elementExperience = experience[index];
//    console.log(elementExperience);
// }
// console.log(experience);

// let num = [7, 3, 9];

// for (let index = 0; index < num.length; index++) {
//    const element = num[index];
//    console.log(element);
// }

// let sentence = ["Hello", "my", "name", "is", "John"];
// let greeting = document.getElementById("message-block");

// for (let index = 0; index < sentence.length; index++) {
//    // const element = sentence[index];
//    // console.log(element);
//    greeting.textContent += sentence[index] + " ";
// }

// let playerOneTime = 150;
// let playerTwoTime = 165;

// let getFastestTime = () => {
//    if (playerOneTime > playerTwoTime) {
//       return playerOneTime;
//    } else if (playerTwoTime > playerOneTime) {
//       return playerTwoTime;
//    } else {
//       return playerOneTime;
//    }
// };

// fastestTime = getFastestTime();
// console.log(fastestTime);

// let getTotalTime = () => {
//    return playerOneTime + playerTwoTime;
// };
// let totalTime = getTotalTime();
// console.log(totalTime);

//to get random number btw 0.00 - 0.6
// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

// //to remove decimal points in numbers
// let floorNumber = Math.floor(3.45632);
// console.log(floorNumber);

// //to get numbers from 1-6
// // let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
// // console.log(randomNumberTwo);

// // a function to get numbers from 1 - 6
// let rollDice = () => {
//    let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
//    return randomNumberTwo;
// };
// console.log(rollDice());

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
   showSolution();
}

function showSolution() {
   console.log("Showing the Solution....");
}
