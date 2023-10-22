function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
    let answer;
    if (operator === '+') {
        answer = add(num1, num2);
    }
    else if (operator === '-') {
        answer = subtract(num1, num2);
    }
    else if (operator === 'x' || operator === '*') {
        answer = multiply(num1, num2);
    }
    else if (operator === '/' ) {
        answer = divide(num1, num2);
    } return answer;
}

let displayText = document.querySelector(".display-text");
let displayValue = document.querySelector(".display-text").textContent;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnPer = document.querySelector("#btnPer");

function buttonPress1() {
    let btnValue = btn1.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress2() {
    let btnValue = btn2.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress3() {
    let btnValue = btn3.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress4() {
    let btnValue = btn4.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress5() {
    let btnValue = btn5.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress6() {
    let btnValue = btn6.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress7() {
    let btnValue = btn7.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress8() {
    let btnValue = btn8.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress9() {
    let btnValue = btn9.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPress0() {
    let btnValue = btn0.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}
function buttonPressPer() {
    let btnValue = btnPer.textContent;
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
}

btn1.addEventListener('click', buttonPress1);
btn2.addEventListener('click', buttonPress2);
btn3.addEventListener('click', buttonPress3);
btn4.addEventListener('click', buttonPress4);
btn5.addEventListener('click', buttonPress5);
btn6.addEventListener('click', buttonPress6);
btn7.addEventListener('click', buttonPress7);
btn8.addEventListener('click', buttonPress8);
btn9.addEventListener('click', buttonPress9);
btn0.addEventListener('click', buttonPress0);
btnPer.addEventListener('click', buttonPressPer);
