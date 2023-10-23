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
    if (num2 === 0) {
        alert("You can't divide by 0 silly goose!  I'm changing the divisor to 1");
        return num1 / 1;
    }
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
    else if (operator === '*') {
        answer = multiply(num1, num2);
    }
    else if (operator === '/' ) {
        answer = divide(num1, num2);
    }
    else if (operator === '=') {
        answer = num2;
    }
    return answer;
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
const btnClear = document.querySelector("#btnClear");
const btnNeg = document.querySelector("#btnNeg");
const btnBksp= document.querySelector("#btnBksp");

const btnMult = document.querySelector("#btnMult");
const btnDiv = document.querySelector("#btnDiv");
const btnSubt = document.querySelector("#btnSubt");
const btnAdd = document.querySelector("#btnAdd");
const btnEqual = document.querySelector("#btnEqual");


function buttonPress1() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn1.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress2() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn2.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress3() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn3.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }

}
function buttonPress4() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn4.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress5() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn5.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress6() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn6.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress7() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn7.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress8() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn8.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress9() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn9.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPress0() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let btnValue = btn0.textContent;
    if (!operators.includes(lastChar)) {
    displayValue += btnValue;
    let numberToAdd = document.createTextNode(btnValue);
    displayText.appendChild(numberToAdd);
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPressPer() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let decimal = '.';
    let btnValue = btnPer.textContent;
    if (!operators.includes(lastChar)) {
        if (!displayValue.includes(decimal)) {
          displayValue += btnValue;
            let numberToAdd = document.createTextNode(btnValue);
            displayText.appendChild(numberToAdd);
        }
    } else if (operators.includes(lastChar)) {
        displayValue = btnValue;
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode(btnValue);
        displayText.appendChild(numberToAdd);
    }
}
function buttonPressNeg() {
    let operators = '+-*/=';
    let lastChar = displayValue[displayValue.length - 1];
    let textChildren = displayText.childNodes;
    let firstChild = textChildren[0];
    if (displayValue === '-') {
        displayValue = '';
        displayText.removeChild(displayText.firstChild);
    }
    else if (!operators.includes(lastChar)) {
        if (displayValue[0] === '-') {
            let displayValueArray = displayValue.split('');
            displayValueArray.splice(0, 1);
            let newDisplayValue = displayValueArray.join('');
            displayValue =  newDisplayValue;
            displayText.removeChild(firstChild);
        } else if (displayValue[0] !== '-') {
            let displayValueArray = displayValue.split('');
            displayValueArray.splice(0, 0, '-');
            let newDisplayValue = displayValueArray.join('');
            displayValue = newDisplayValue;
            let negVal = document.createTextNode('-');
            displayText.insertBefore(negVal, firstChild);
        }
    } else if (operators.includes(lastChar)) {
        displayValue = '-';
        let textChildren = displayText.childNodes;
        for (i = textChildren.length - 1; i >= 0; i--) {
            displayText.removeChild(textChildren[i]);
        }
        let numberToAdd = document.createTextNode('-');
        displayText.appendChild(numberToAdd);
    }
}


function buttonPressClear() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    if (displayText.hasChildNodes() === true) {
    displayValue = '';
    let textChildren = displayText.childNodes;
    for (i = textChildren.length - 1; i >= 0; i--) {
        displayText.removeChild(textChildren[i]);
        }
    }
}

function buttonPressBksp() {
    if (displayText.hasChildNodes() === true) {
    let textChildren = displayText.childNodes;
    let lastChild = textChildren[textChildren.length - 1];
    displayText.removeChild(lastChild);
    }
}

function buttonPressAdd() {
    if (displayValue === '') {
    }
    else if (displayValue !== '') {
        if (num1 === undefined) {
            let btnValue = btnAdd.textContent;
            operator = btnValue;
            num1 = parseFloat(displayValue);
            displayValue += btnValue;
        }
        else if (num1 !== undefined && operator !== undefined) {
            let btnValue = btnAdd.textContent;
            num2 = parseFloat(displayValue);
            let solution = operate(operator, num1, num2);
            num1 = solution;
            num2 = undefined;
            operator = btnValue;
            let roundedSolution = round(solution);
            let roundedSolutionString = roundedSolution.toString();
            if (roundedSolutionString.length >= 8) {
                let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
                let numberToAdd = document.createTextNode("Too Full!");
                displayText.appendChild(numberToAdd);
            } else {displayValue = roundedSolution.toString();
            displayValue += btnValue;
            let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
            let numberToAdd = document.createTextNode(roundedSolution);
            displayText.appendChild(numberToAdd);}
        }
    }
}

function buttonPressSubt() {
    if (displayValue === '') {
    }
    else if (displayValue !== '') {
        if (num1 === undefined) {
            let btnValue = btnSubt.textContent;
            operator = btnValue;
            num1 = parseFloat(displayValue);
            displayValue += btnValue;
        }
        else if (num1 !== undefined && operator !== undefined) {
            let btnValue = btnSubt.textContent;
            num2 = parseFloat(displayValue);
            let solution = operate(operator, num1, num2);
            num1 = solution;
            num2 = undefined;
            operator = btnValue;
            let roundedSolution = round(solution);
            let roundedSolutionString = roundedSolution.toString();
            if (roundedSolutionString.length >= 8) {
                let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
                let numberToAdd = document.createTextNode("Too Full!");
                displayText.appendChild(numberToAdd);
            } else {displayValue = roundedSolution.toString();
            displayValue += btnValue;
            let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
            let numberToAdd = document.createTextNode(roundedSolution);
            displayText.appendChild(numberToAdd);}
        }
    }
}

function buttonPressDiv() {
    if (displayValue === '') {
    }
    else if (displayValue !== '') {
        if (num1 === undefined) {
            let btnValue = btnDiv.textContent;
            operator = btnValue;
            num1 = parseFloat(displayValue);
            displayValue += btnValue;
        }
        else if (num1 !== undefined && operator !== undefined) {
            let btnValue = btnDiv.textContent;
            num2 = parseFloat(displayValue);
            let solution = operate(operator, num1, num2);
            num1 = solution;
            num2 = undefined;
            operator = btnValue;
            let roundedSolution = round(solution);
            let roundedSolutionString = roundedSolution.toString();
            if (roundedSolutionString.length >= 8) {
                let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
                let numberToAdd = document.createTextNode("Too Full!");
                displayText.appendChild(numberToAdd);
            } else {displayValue = roundedSolution.toString();
            displayValue += btnValue;
            let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
            let numberToAdd = document.createTextNode(roundedSolution);
            displayText.appendChild(numberToAdd);}
        }
    }
}
function buttonPressMult() {
    if (displayValue === '') {
    }
    else if (displayValue !== '') {
        if (num1 === undefined) {
            let btnValue = btnMult.textContent;
            operator = btnValue;
            num1 = parseFloat(displayValue);
            displayValue += btnValue;
        }
        else if (num1 !== undefined && operator !== undefined) {
            let btnValue = btnMult.textContent;
            num2 = parseFloat(displayValue);
            let solution = operate(operator, num1, num2);
            num1 = solution;
            num2 = undefined;
            operator = btnValue;
            let roundedSolution = round(solution);
            let roundedSolutionString = roundedSolution.toString();
            if (roundedSolutionString.length >= 8) {
                let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
                let numberToAdd = document.createTextNode("Too Full!");
                displayText.appendChild(numberToAdd);
            } else {displayValue = roundedSolution.toString();
            displayValue += btnValue;
            let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
            let numberToAdd = document.createTextNode(roundedSolution);
            displayText.appendChild(numberToAdd);}
        }
    }
}

function buttonPressEqual() {
    if (displayValue === '') {
    }
    else if (displayValue !== '') {
        if (num1 === undefined) {
            let btnValue = btnEqual.textContent;
            operator = btnValue;
            num1 = parseFloat(displayValue);
            displayValue += btnValue;

        }
        else if (num1 !== undefined && operator !== undefined) {
            let btnValue = btnEqual.textContent;
            num2 = parseFloat(displayValue);
            let solution = operate(operator, num1, num2);
            num1 = solution;
            num2 = undefined;
            operator = btnValue;
            let roundedSolution = round(solution);
            let roundedSolutionString = roundedSolution.toString();
            if (roundedSolutionString.length >= 8) {
                let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
                let numberToAdd = document.createTextNode("Too Full!");
                displayText.appendChild(numberToAdd);
            } else {displayValue = roundedSolution.toString();
            displayValue += btnValue;
            let textChildren = displayText.childNodes;
            for (i = textChildren.length - 1; i >= 0; i--) {
                displayText.removeChild(textChildren[i]);
                }
            let numberToAdd = document.createTextNode(roundedSolution);
            displayText.appendChild(numberToAdd);}
        }
    }
}


function round(value, decimals = 4) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }


function overDisplay() {
    let textCount = displayText.textContent.length;
    if (textCount >= 8) {
        let numberToAdd = document.createTextNode('Too Full!');
        let textChildren = displayText.childNodes;
    for (i = textChildren.length - 1; i >= 0; i--) {
        displayText.removeChild(textChildren[i]);
        }
        displayText.appendChild(numberToAdd);

    }
}


btnEqual.addEventListener('click', buttonPressEqual);
btnClear.addEventListener('click', buttonPressClear);
btnNeg.addEventListener('click', buttonPressNeg);
btnNeg.addEventListener('click', overDisplay);
btnBksp.addEventListener('click', buttonPressBksp);
btn1.addEventListener('click', buttonPress1);
btn1.addEventListener('click', overDisplay);
btn2.addEventListener('click', buttonPress2);
btn2.addEventListener('click', overDisplay);
btn3.addEventListener('click', buttonPress3);
btn3.addEventListener('click', overDisplay);
btn4.addEventListener('click', buttonPress4);
btn4.addEventListener('click', overDisplay);
btn5.addEventListener('click', buttonPress5);
btn5.addEventListener('click', overDisplay);
btn6.addEventListener('click', buttonPress6);
btn6.addEventListener('click', overDisplay);
btn7.addEventListener('click', buttonPress7);
btn7.addEventListener('click', overDisplay);
btn8.addEventListener('click', buttonPress8);
btn8.addEventListener('click', overDisplay);
btn9.addEventListener('click', buttonPress9);
btn9.addEventListener('click', overDisplay);
btn0.addEventListener('click', buttonPress0);
btn0.addEventListener('click', overDisplay);
btnPer.addEventListener('click', buttonPressPer);
btnPer.addEventListener('click', overDisplay);
btnAdd.addEventListener('click', buttonPressAdd);
btnSubt.addEventListener('click', buttonPressSubt);
btnDiv.addEventListener('click', buttonPressDiv);
btnMult.addEventListener('click', buttonPressMult);

document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    console.log(keyName);
    if (keyName === '1') {
        buttonPress1();
        overDisplay();
    } else if (keyName === '2') {
        buttonPress2();
        overDisplay();
    } else if (keyName === '3') {
        buttonPress3();
        overDisplay();
    } else if (keyName === '4') {
        buttonPress4();
        overDisplay();
    } else if (keyName === '5') {
        buttonPress5();
        overDisplay();
    } else if (keyName === '6') {
        buttonPress6();
        overDisplay();
    } else if (keyName === '7') {
        buttonPress7();
        overDisplay();
    } else if (keyName === '8') {
        buttonPress8();
        overDisplay();
    } else if (keyName === '9') {
        buttonPress9();
        overDisplay();
    } else if (keyName === '0') {
        buttonPress0();
        overDisplay();
    } else if (keyName === '.') {
        buttonPressPer();
        overDisplay();
    } else if (keyName === 'Backspace') {
        buttonPressBksp();
    } else if (keyName === '+') {
        buttonPressAdd();
    } else if (keyName === '-') {
        buttonPressSubt();
    } else if (keyName === '/') {
        buttonPressDiv();
    } else if (keyName === '*' || keyName === 'x') {
        buttonPressMult();
    } else if (keyName === '=' || keyName === 'Enter') {
        buttonPressEqual();
    } else if (keyName === 'c') {
        buttonPressClear();
    }

});
