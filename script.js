const add = (a, b) => parseInt(a) + parseInt(b);

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

var operator = 'add';
var screenValue = '';

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



function replyClick(clickedId) {
    console.log(clickedId);
    if (clickedId === 'cancel') {
        clearScreen();
        return;
    } else if (clickedId === 'divide'){
        operator = clickedId;
        a = screenValue;
        clearScreen();
        return;
    } else if (clickedId === 'multiply'){
        operator = clickedId;
        a = screenValue;
        clearScreen();
        return;
    } else if (clickedId === 'subtract'){
        operator = clickedId;
        a = screenValue;
        clearScreen();
        return;
    } else if (clickedId === 'add'){
        operator = clickedId;
        a = screenValue;
        clearScreen();
        return;
    } else if (clickedId === 'equals'){
        b = screenValue;
        getResult(operator, a, b);
    } else if (clickedId === '0' 
            || clickedId === '1' 
            || clickedId === '2' 
            || clickedId === '3' 
            || clickedId === '4' 
            || clickedId === '5' 
            || clickedId === '6' 
            || clickedId === '7' 
            || clickedId === '8' 
            || clickedId === '9' 
            || clickedId === '.' ) {
        if (screenValue.includes('.') && clickedId === '.') return; 
        screenValue += clickedId;
        setScreen(screenValue);
    }

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