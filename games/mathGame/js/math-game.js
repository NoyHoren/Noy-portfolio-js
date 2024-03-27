const btnCheck = document.getElementById('btn-check');
const inputResult = document.getElementById('input-result');
const pExercise = document.getElementById('excercise');
const targilPrint = document.getElementsByClassName('targil');
const rightAns = document.getElementsByClassName('rightAns');
const yourANS = document.getElementsByClassName('yourAns');
const points = document.getElementsByClassName('points');
const ans = document.getElementById('ans');
const checkedLevel = document.querySelectorAll(".level");

let num1;
let num2;
let operator;
let result;
let targil;
let difficultyLevel = 1;



const operators = ["+", "-", "/", "*"];

document.addEventListener("DOMContentLoaded", () => {

    const operator = operators[random(0, 4)];
    const exercise = genExercise(operator, Math.pow(10, difficultyLevel));
    pExercise.textContent = exercise;
    btnCheck.addEventListener("click", () => {
        checkResult();
        const operator = operators[random(0, 4)];
        const exercise = genExercise(operator, Math.pow(10, difficultyLevel));
        pExercise.textContent = exercise;
    });
});

function genExercise(operator = "+", range = 10) {
    const rand1 = random(1, range);
    const rand2 = random(1, range);


    let targil = '';
    switch (operator) {
        case '+':
            targil = `${rand1} + ${rand2}`;
            result = rand1 + rand2;
            break;
        case '-':
            targil = `${rand1} - ${rand2}`;
            result = rand1 - rand2;
            break;
        case '*':
            targil = `${rand1} * ${rand2}`;
            result = rand1 * rand2;
            break;
        case '/':
            targil = `${rand1} / ${rand2}`;
            result = rand1 / rand2;
            break;

    }
    return targil;
}



let points1 = 0;

function checkResult() {
    console.log(result);
    const userResult = inputResult.value;
    console.log(userResult);
    console.log(pExercise);

    if (userResult == result) {
        points1 += 10;
    }
    else {
        points1 = points1;
    }

    console.log(points);
    const newContentContainer = document.createElement('div');

    // Create new <p> elements
    const addPoints = document.createElement('p');
    const answer = document.createElement('p');
    const rightAnswer = document.createElement('p');
    const exc = document.createElement('p');

    // Set content for each element
    addPoints.innerText = points1;
    exc.textContent = pExercise.textContent;
    answer.innerText = inputResult.value;
    rightAnswer.innerText = result;

    // Append new <p> elements to the new <div> container
    newContentContainer.appendChild(addPoints);
    newContentContainer.appendChild(answer);
    newContentContainer.appendChild(rightAnswer);
    newContentContainer.appendChild(exc);

    // Append the new <div> container with the new <p> elements to the 'ans' div
    ans.appendChild(newContentContainer);
    inputResult.value = "";

}

checkedLevel.forEach((input) => {
    input.addEventListener("change", (e) => {
        difficultyLevel = e.target.value;
        const operator = operators[random(0, 4)];
        const exercise = genExercise(operator, Math.pow(10, difficultyLevel));
        pExercise.textContent = exercise;
    })
})
