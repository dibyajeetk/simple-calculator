const screenUI = document.querySelector('#screen');

const outputUI = document.createElement('p');
outputUI.textContent = 0;
outputUI.setAttribute('id', 'output');
screenUI.appendChild(outputUI);

let userInputX = ''; // store as string
let userInputY = '';
let userOperation = '';
let rawInput = '';

// Supported operators
const ops = ['+', '-', '*', '/', '%'];

function operate(x, y, op) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = 0;

    switch (op) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/': result = y === 0 ? 'error' : x / y; break;
        case '%': result = x % y; break;
    }

    outputUI.textContent = result;
    
    // Reset state
    rawInput = '' + result;
    userInputX = '' + result;
    userInputY = '';
    userOperation = '';
}

const keyboard = document.querySelectorAll('.group .btn');

keyboard.forEach(key => key.addEventListener('click', (e) => {
    const target = e.target;
    const value = target.textContent;

    if (value === '=') {
        if (userInputX && userInputY && userOperation) {
            operate(userInputX, userInputY, userOperation);
        }
    } else if (value === 'ac') {
        rawInput = '';
        userInputX = '';
        userInputY = '';
        userOperation = '';
        outputUI.textContent = 0;
    } else if (target.title === 'backspace') {
        rawInput = rawInput.slice(0, -1);

        // Try to reconstruct X, Y, and operation
        userOperation = ops.find(op => rawInput.includes(op)) || '';
        if (userOperation) {
            const opIndex = rawInput.indexOf(userOperation);
            userInputX = rawInput.slice(0, opIndex);
            userInputY = rawInput.slice(opIndex + 1);
        } else {
            userInputX = rawInput;
            userInputY = '';
        }

        outputUI.textContent = rawInput || 0;
    } else {
        rawInput += value;

        userOperation = ops.find(op => rawInput.includes(op)) || '';

        if (userOperation) {
            const opIndex = rawInput.indexOf(userOperation);
            userInputX = rawInput.slice(0, opIndex);
            userInputY = rawInput.slice(opIndex + 1);
        } else {
            userInputX = rawInput;
            userInputY = '';
        }

        outputUI.textContent = rawInput;
    }
}));
