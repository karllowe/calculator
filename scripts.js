let firstNumber=0;
let secondNumber=0;
let operator;
let maxDigits=8;

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
            numberAsString = parseFloat(firstNumber);
        } else {
            secondNumber += selectedNumber.toString();
            numberAsString = parseFloat(secondNumber);
        };
        outputDisplay.textContent=numberAsString;
    })
    }
); 

const decimalSelected = document.querySelector("#decimal");
decimalSelected.addEventListener("click", () => {
        if (operator === undefined) {
            firstNumber += ".";
            numberAsString = parseFloat(firstNumber).toString();
        } else {
            secondNumber += ".";
            numberAsString = parseFloat(secondNumber).toString();
        };
        outputDisplay.textContent=numberAsString;
});

const anyButtonClicked = document.querySelectorAll("button");
anyButtonClicked.forEach((item) => 
    item.addEventListener("click", () => {
        if (outputDisplay.textContent.includes(".")){
            decimalSelected.disabled = true;
        } else {
            decimalSelected.disabled = false;
        }
    })
);

const selectedOperator = document.querySelectorAll(".operator");
selectedOperator.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (operator === undefined) {
            operator=e.target.id;
            outputDisplay.textContent=e.target.textContent;
        }
    })}
);

const clearInputs = document.querySelector("#clear");
clearInputs.addEventListener("click", () => {
    outputDisplay.textContent=0;
    firstNumber=0;
    secondNumber=0;
    operator=undefined;
});

function operate (num1, num2, operator) {
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    let operateOutput;
    switch (operator) {
        case "add":
            operateOutput = add(num1,num2);
            break;
        case "subtract":
            operateOutput = subtract(num1, num2);
            break;
        case "multiply":
            operateOutput = multiply(num1, num2);
            break;
        case "divide":
            operateOutput = divide(num1, num2);
            break;
    }
    return operateOutput;
};

const executeOperation = document.querySelector(".equals");
executeOperation.addEventListener("click", () => {
    if (operator != undefined) {
        if (operator == "divide" && secondNumber == 0) {
            outputDisplay.textContent = "impossible!";
        } else {
            outputDisplay.textContent=operate(firstNumber, secondNumber, operator);
        };
        firstNumber=0;
        secondNumber=0;
        operator=undefined;
    }
})