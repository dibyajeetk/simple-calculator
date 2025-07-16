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

// 
let inputA = 0;
let inputB = 0;
let func = 0;

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