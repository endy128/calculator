const add = (a, b) => parseInt(a) + parseInt(b);

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

var operator = 'add';
var screenValue = '';
var dontWipeScreen = true; // keeps the number on screen after an operator is selected
var a = 0;
var b = 0;

function operate(op, a, b) {
    if (op === 'add') {
        return add(a, b);
    } else if (op === 'subtract') {
        return subtract(a, b);
    } else if (op === 'divide') {
        return divide(a, b);
    } else if (op === 'multiply') {
        return multiply(a, b);
    }
};


function setScreen(value) {
    document.querySelector(".screen").innerHTML = value;
    screenValue = value;
}


function getResult(operator, a, b) {
        setScreen(operate(operator, a, b));
}


function clearScreen() {
    setScreen('');
}

function allClear() {
    screenValue = '';
    clearScreen();
}


// add event listner for all the buttons, call evaluate when they are pressed
document.querySelectorAll('.btn').forEach(el => el.addEventListener('click', () => evaluate(el.id)));

function evaluate(keyPress) {
    switch (keyPress) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            if (screenValue.includes('.') && keyPress === '.') break;
            if (dontWipeScreen === true) {
                clearScreen();
                dontWipeScreen === false;
            }
            
            screenValue += keyPress;
            setScreen(screenValue);
            dontWipeScreen = false;
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            dontWipeScreen = true;
            operator = keyPress;
            a = parseInt(screenValue);
            // clearScreen();
            break;
        case "cancel":
            clearScreen();
            break;
        case "percent":
            screenValue /= 100;
            a = parseInt(screenValue);
            setScreen(screenValue);
            break;
        case "plusmn":
            screenValue *= -1;
            a = parseInt(screenValue);
            setScreen(screenValue);
            break;
        case "equals":
            dontWipeScreen = false;
            b = parseInt(screenValue);
            getResult(operator, a, b);
    }
}