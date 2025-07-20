const keys = document.querySelectorAll(".group .btn");
const screen = document.querySelector("#screen");
const displayText = document.createElement('p');
screen.appendChild(displayText);
displayText.textContent = 0;
displayText.setAttribute("id", "displayText");


let inputObject = {};
let input = '';
let nums = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9];
let operations = ['+', '−', '×', '÷', '%'];

keys.forEach(key => {
    key.addEventListener('click', (e) => {
        let target = e.target;
        
        if(target.textContent === 'ac') {
            displayText.textContent = 0;
            input = '';
            inputObject = {};
        } else if (nums.includes(Number(target.textContent))) {
            input += target.textContent;
            inputObject['x'] = input; // this is a string
            displayText.textContent = inputObject['x'];
        } else if (operations.includes(target.textContent)) {
            console.log(target.textContent);
            inputObject['action'] = target.textContent;
        }
         else {
            
            console.log(typeof(target.textContent));
        }
    });
})