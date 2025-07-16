const screen = document.querySelector("#screen");

// history
const screenCurrentOperation = document.createElement("p");
screen.appendChild(screenCurrentOperation);
screenCurrentOperation.setAttribute("id", "screenCurrentOperation");
screenCurrentOperation.textContent = '-';

// result
const screenOutput = document.createElement("p");
screen.appendChild(screenOutput);
screenOutput.setAttribute("id", "screenOutput");
screenOutput.textContent = '0';

// global variable
let numX = '0';
let numY = 0;
let func = 0;

// User input
const keyboard = document.querySelector("#keyboard");
//slect all keys
const keys = Array.from(document.querySelectorAll('.group .btn'));
const numberKeys = keys.filter(key => {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return nums.includes(key.textContent);
});

keys.forEach(key => {
    key.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target.title)
        if (target.textContent === 'ac') {
            screenCurrentOperation.textContent = '-';
            screenOutput.textContent = '0';
            numX = '0';
        } else if (numberKeys.find(key => key === target)) {
            let input = '';
            input += target.textContent;
            numX = numX.concat(input);
            numX = numX.slice(1);
            screenOutput.textContent = numX;
            console.log(numX)
        } else if (target.title === 'backspace') {
            inputA = inputA.slice(0, -1);
            screenOutput.textContent = inputA;
        }
    });
});

function operate (a, b, fn) {
    inputA = a;
    inputB = b;
    func = fn;
    if (func === 'add') {
        screenOutput.textContent = addition();
    } else if (func === 'sub') {
        screenOutput.textContent = substraction();
    }
}
// test: chain operation
let num = [];
function test (fn, ...args) {
    let func = fn;
    let output = 0;
    if (func === 'add') {
        output = args.reduce((total, num) => total += num);
        screenOutput.textContent = output;
    } else if (func === 'sub') {
        output = args.reduce((total, num) => total -= num);
        screenOutput.textContent = output;
    }
}


function addition () {
    return inputA + inputB;
}

function substraction (a, b) {
    return inputA - inputB;
}

function multiplication (a, b) {
    return a * b;
}

function division (a, b) {
    return b / a;
}