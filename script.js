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
