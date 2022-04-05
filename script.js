const add = (a, b) => parseInt(a) + parseInt(b);

const subtract = (a, b) => parseInt(a) - parseInt(b);

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

var operator = 'add';
var screenValue = '';
var wipeScreen = false; // keeps the number on screen after an operator is selected
var a = '';
var b = '';

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


function clearScreen() {
    setScreen('');
}

function allClear() {
    screenValue = '';
    a = '';
    b = '';
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
            if (wipeScreen === true) { // allows the result to stay on screen if operator is pressed instead of equals
                wipeScreen = false;
                clearScreen();
            }
            if (toString(screenValue).includes('.') && keyPress === '.') break;
                screenValue += keyPress;
                setScreen(screenValue);
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            operator = keyPress;
            if (a === '') {
                a = screenValue;
                clearScreen();
                break;
            } else {
                b = screenValue;
                a = operate(operator, a ,b);
                setScreen(a);
                wipeScreen = true;
                break; 
            }
        case "cancel":
            allClear();
            break;
        case "percent":
            screenValue /= 100;
            a = screenValue;
            setScreen(screenValue);
            break;
        case "plusmn":
            screenValue *= -1;
            a = screenValue;
            setScreen(screenValue);
            break;
        case "equals":
            if (operator === 'divide' && screenValue === '0') {
                alert("No divide by zero!");
                allClear();
                break;
            }
            b = screenValue;
            a = operate(operator, a ,b);
            setScreen(a);
            console.log(`a = ${a} & b = ${b}`);

    }
}