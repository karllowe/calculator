let firstNumber;
let secondNumber;
let operator;

// basic number operator functions
function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

// basic variables and operate function
const selectedNumber = document.querySelectorAll(".number");
selectedNumber.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (operator === undefined) {
            firstNumber = parseInt(e.target.id)
        } else {
            secondNumber = parseInt(e.pointerId)
        };
        console.log(firstNumber);
    })
    }
); 


function operate (num1, num2, operator) {
    switch (operator) {
        case "add":
            return add(num1,num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
    }
};
