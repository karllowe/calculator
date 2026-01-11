let firstNumber=0;
let secondNumber=0;
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
        const selectedNumber = e.target.id;
        if (operator === undefined) {
            firstNumber += selectedNumber.toString();
            numberAsString = parseInt(firstNumber);
        } else {
            secondNumber += selectedNumber.toString();
            numberAsString = parseInt(secondNumber);
        };
        outputDisplay.textContent=numberAsString;
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

const clearInputs = document.querySelector(".clear");
clearInputs.addEventListener("click", () => {
    outputDisplay.textContent=0;
    firstNumber=0;
    secondNumber=0;
    operator=undefined;
});

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
    outputDisplay.textContent=operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    firstNumber=undefined;
    secondNumber=undefined;
    operator=undefined;
})