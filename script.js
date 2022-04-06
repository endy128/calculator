const add = (a, b) => parseInt(a) + parseInt(b);

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

var operator = '';
var screenValue = [];
var wipeScreen = false; // keeps the number on screen after an operator is selected
var a = '';
var b = '';
var result = '';

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


function setScreen(screenString) {
    document.querySelector(".screen").innerHTML = screenString;
    screenValue = screenString.toString().split(''); // update the screenValue after setting the html
}


function clearScreen() {
    setScreen('');
}

function allClear() {
    screenValue = [];
    a = '';
    b = '';
    clearScreen();
}


// add event listner for all the buttons, call evaluate when they are pressed
document.querySelectorAll('.btn').forEach(button => button.addEventListener('click', () => evaluate(button.id)));

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
            // check for a decimal and ignore if it's pressed again
            // or check for max of 8 chars, to not over run the screen
            if ((screenValue.includes('.') && keyPress ==='.') || screenValue.length > 8 ) break;        
            // if decimal first, add a zero
            if (screenValue[0] === undefined && keyPress === '.') screenValue.push('0');
            // add to end off array
            screenValue.push(keyPress);
            console.log(`screenValue:${screenValue}, a=${a}, b=${b}`);
            // update screen with array
            setScreen(screenValue.join(''));
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            if (operator != keyPress && wipeScreen === true) {
                operator = keyPress;
                break;
            }
            operator = keyPress;
            if (a === '') {
                a = screenValue.join('');
                clearScreen();
                break;
            } else {
                b = screenValue.join('');
                result = operate(operator, a ,b);
                setScreen(result);
                wipeScreen = true;
                a = result;
                break; 
            }
        case "cancel":
            allClear();
            break;
        case "percent":
            // divide by 100
            b = screenValue.join('');
            b = (b / 100);
            setScreen(b);
            break;
        case "plusmn":
            // multiply the screen value by -1
            b = screenValue.join('');
            b = (b * -1);
            setScreen(b);
            break;
        case "equals":
            // check for divide by zero
            if (operator === 'divide' && screenValue === '0') {
                alert("No divide by zero!");
                allClear();
                break;
            }
            b = screenValue.join('');
            a = operate(operator, a ,b);
            setScreen(a);
            wipeScreen = true;
            console.log(`a=${a}, b=${b}`);

            
    }
}
