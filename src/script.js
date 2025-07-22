const keys = document.querySelectorAll(".group .btn");
const screen = document.querySelector("#screen");
const displayText = document.createElement('p'); 
const subText = document.createElement('p');
screen.appendChild(subText);
subText.setAttribute('id', 'subText')
subText.textContent = '-';
screen.appendChild(displayText);
displayText.textContent = 0;
displayText.setAttribute("id", "displayText");


let operation = {}; // stores entire user operation under keys numX, operation, NumY
let input = ''; // stores raw Input from user
let nums = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, '.'];
let operators = ['+', '−', '×', '÷', '%', 'U+2212'];

// User Input Events Management
// Need a way to take input for 1st, 2nd numbers and operation
// update display text: 1st num + '' + operation + '' + 2nd num
// 
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        let target = e.target;
        
        let numX = 0;
        let numY = 0;
        let action = 0;

        if ((nums.map(n => n.toString())).includes(target.textContent)) {
            input += (target.textContent); //.trim();
            if (input.includes('.')) {
                numX = parseFloat(input);
                displayText.textContent = input;
            } else {
                numX = parseInt(input);
                displayText.textContent = numX;
            }
            console.log(numX);
        } else if (operators.includes(target.textContent)) {
            let mapping = {
                '+': sum(),
            }
            action = target.textContent;
            input += action;
            displayText.textContent = input;
        } else if (target.textContent === 'ac') {
            input = '';
            displayText.textContent = 0;
        } else if (target.textContent === 'backspace') {
            input = input.slice(0, -1);
            displayText.textContent = input;
        } else if (target.textContent === '=') {
            input = operate(numX, numY, action);
            displayText.textContent = input;
        } else {
            input = 'rand';
            displayText.textContent += input;
        }
            
        
        // let action = operators.find(op => input.includes(op));
        // let numX = 0;
        // let numY = 0;
        // if (!action) {
        //     numX = input;
        //     displayText.textContent = numX
        //     console.log(`numX: ${numX}, action: ${action}, numY: ${numY}`);
        // } else {
        //     numX = input.slice(0, input.indexOf(action)).trim();
        //     numY = input.slice(input.indexOf(action) + 1).trim();
    
        //     displayText.textContent = `${numX}${action}${numY}`;
        //     console.log(`numX: ${numX}, action: ${action}, numY: ${numY}`);
        // }
        // formatting raw input
        // let action = ((operators.filter(n => input.includes(n))).join()).slice(-1); // find operator
        // let numX = input.slice(0, input.indexOf(action)); // first number(get everynumber before operation)
        // let numY = input.slice(input.indexOf(action) + 1);
        // displayText.textContent = numX + '' + action + '' + numY;
        // console.log(numX, action, numY);
    });
});

function operate (x , y, operator) {
    let value = `${x}, ${y}, ${operator}`;
    return value
};

function sum (x , y) {
    return x + y
}