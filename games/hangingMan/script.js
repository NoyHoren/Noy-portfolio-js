const gameContainer = document.querySelector(".container");
const formElement = document.querySelector(".form-wrapper");
const gameTextElement = document.querySelector(".game-text");
const textInputElement = document.querySelector(".text-input");
const imageElement = document.querySelector(".image");
const errorElement = document.querySelector(".error-text");
const attemptsElement = document.querySelector(".attempts");
const words = [
    "apple",
    "banana",
    "cat",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "house",
    "icecream",
    "jacket",
    "kite",
    "lemon",
    "mango",
    "nest",
    "orange",
    "penguin",
    "queen",
    "rabbit",
    "sun",
    "tree",
    "umbrella",
    "violin",
    "watermelon",
    "xylophone",
    "yacht",
    "zebra",
    "airplane",
    "book",
    "car",
    "desk",
    "egg",
    "frog",
    "globe",
    "hat",
    "island",
    "juice",
    "kangaroo",
    "lamp",
    "moon",
    "notebook",
    "ocean",
    "pizza",
    "quilt",
    "rocket",
    "snake",
    "table",
    "unicorn",
    "volcano",
    "whale",
    "xylophone",
    "yogurt",
    "zeppelin"
];

let randomWord = "";
let guessedLetters = [];
let attemptsLeft = 6;
let errorMessage = "";

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    onAddLetter();
})

function changeRandomWord() {
    const arrayLength = words.length;
    const randomWordIndex = Math.floor(Math.random() * arrayLength);
    randomWord = words[randomWordIndex];
    console.log(randomWord);
}

function renderUi() {
    let displayWord = "";
    randomWord.split("").forEach((letter) => {
        if (guessedLetters.includes(letter)) {
            displayWord += letter;
        } else {
            displayWord += "-";
        }
    })
    console.log(displayWord);
    gameTextElement.textContent = displayWord;
    attemptsElement.textContent = `attempts left: ${attemptsLeft}`;
    imageElement.src = `./assets/step${attemptsLeft}.jpeg`;
}

function onAddLetter() {
    const userInputValue = textInputElement.value;
    if (attemptsLeft === 0) {
        alert("game over")
        return;
    }
    if (userInputValue.length !== 1) {
        errorElement.textContent = "please guess one letter a - z";
        return;
    }
    errorElement.textContent = "";

    if (!randomWord.includes(userInputValue)) attemptsLeft--;
    if (!guessedLetters.includes(userInputValue)) guessedLetters.push(userInputValue);

    renderUi();
    console.log(guessedLetters);
    console.log(attemptsLeft);
}

document.addEventListener("DOMContentLoaded", () => {

    changeRandomWord();
    renderUi();
})




