// blackJackGame
let player = {
	name: "Ekene",
	chips: 200,
};
let messageElement = document.getElementById("message-el");
let cardsElement = document.getElementById("cards-el");
let sumElement = document.getElementById("sum-el");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let playerElement = document.getElementById("player-el");
playerElement.textContent = `${player.name}: $${player.chips}`;

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
		isAlive = true;
	} else if (sum === 21) {
		message = "You have WON, you got BlackJack!!!";
		hasBlackJack = true;
	} else {
		message = "Sorry You are out of the Game!!!";
		isAlive = false;
	}
	sumElement.textContent = `Sum: ${sum}`;
	messageElement.textContent = message;
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	}
}
