const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

var operator = 'divide';

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

console.log(operate(operator, 2, 3));