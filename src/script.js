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


let inputObject = {};
let input = '';
let nums = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9];
let operations = ['+', '−', '×', '÷', '%'];

// User Input Events Management
// Need a way to take input for 1st, 2nd numbers and operation
// update display text 1st num + '' + operation + '' + 2nd num
// 
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        let target = e.target;
        
        if(target.textContent === 'ac') {
            //handles 'All Clear'
            displayText.textContent = 0;
            input = '';
            inputObject = {};
        } else if (nums.includes(Number(target.textContent))) {
            //handle number inputs
            input += target.textContent;
            inputObject['x'] = input; // this is a string
            displayText.textContent = inputObject['x'];
        } else if (operations.includes(target.textContent)) {
            //handle operation inputs
            console.log(target.textContent);
            inputObject['action'] = target.textContent;
        } else if (target.textContent === '='){
            //handle '='
            displayText.textContent = target.textContent;
        } else if (target.title === 'backspace') {
            //handle 'delete'

            displayText.textContent = target.title;
        }
         else {
            if(target) {

            }
            
            console.log(typeof(target.textContent));
        }
    });
})