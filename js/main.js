// alert("Black Jack App!!");
let firstCard = 16;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
   console.log("Do You want to draw a new Card?");
   isAlive = false;
} else if (sum === 21) {
   console.log("You have WON!!!");
   hasBlackJack = true;
} else {
   console.log("Sorry You have LOST!!!");
   isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);

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
