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
const outputDisplay = document.querySelector(".output");

const selectedNumber = document.querySelectorAll(".number");
selectedNumber.forEach((item) => {
    item.addEventListener("click", (e) => {
        const selectedNumber = parseInt(e.target.id);
        if (operator === undefined) {
            firstNumber = selectedNumber
        } else {
            secondNumber = selectedNumber
        };
        outputDisplay.textContent=selectedNumber;
    })
    }
); 

const selectedOperator = document.querySelectorAll(".operator");
selectedOperator.forEach((item) => {
    item.addEventListener("click", (e) => {
        operator=e.target.id;
        outputDisplay.textContent=e.target.textContent;
    })}
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

const executeOperation = document.querySelector(".equals");
executeOperation.addEventListener("click", () => {
    outputDisplay.textContent=operate(firstNumber, secondNumber, operator)
})