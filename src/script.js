const screenUI = document.querySelector('#screen'); // screen div elment

const outputUI = document.createElement('p'); // output p element
outputUI.textContent = 0;
outputUI.setAttribute('id', 'output');
screenUI.appendChild(outputUI);

let userInputX = 0; // stores first user input
let userInputY = 0; // stores second user input
let userOperation = 0; // stores users intended action
let rawInput = 0;


// calculator operators & functions

function operate (x, y, op) {
    x = parseInt(x);
    y = parseInt(y);
    let result = 0;
    if (op === '+') {
        result = x + y;
    } else if (op === '-') {
        result = x - y;
    }
    else if (op === '*') {
        result = x * y;
    } else if (op === '/') {
        result = x / y;
    } else if (op === '%') {
        result = x % y;
    }
    outputUI.textContent = result;
    console.log(result)
};

// keyboard event listner
const keyboard = document.querySelectorAll('.group .btn');

keyboard.forEach(key => key.addEventListener('click', (e) => {
    let target = e.target; // each key
    
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let ops = ['+', '-', '*', '%', '/'];

    if (target.textContent === '=') {
        operate(userInputX, userInputY, userOperation);
    } else if (target.textContent === 'ac') {
        rawInput = 0;
        userInputX = 0;
        userInputY = 0;
        userOperation = 0;
        outputUI.textContent = 0;
    } else if (target.title === 'backspace') {
        rawInput = rawInput.slice(0, -1);
        userInputX = rawInput.slice(1);
        outputUI.textContent = userInputX;
    } else {
        rawInput += target.textContent;
        outputUI.textContent = rawInput.slice(1);

        if (ops.some(op => rawInput.includes(op))){
            userOperation = ops.find(op => rawInput.includes(op));
            const opIndex = rawInput.indexOf(userOperation);
            userInputX = rawInput.slice(1, opIndex);
            userInputY = rawInput.slice(opIndex + 1);
            outputUI.textContent = userInputX + userOperation + userInputY;
        }
    }
}));