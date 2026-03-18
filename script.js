const PLUS = "+";
const MINUS = "−";
const TIMES = "×";
const DIVIDE = "÷";
const LEFT_ARROW = "←";
const CLEAR = "C";
const OPERATORS = "+−×÷";
const EQUAL = "=";
const DOT = ".";
const NUMBERS = "0123456789";


function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operand1, operand2, operator) {
  let num1 = Number(operand1);
  let num2 = Number(operand2);

  let result;
  if (operator === PLUS) {
    result = add(num1, num2);
  } else if (operator === MINUS) {
    result = substract(num1, num2);
  } else if (operator === TIMES) {
    result = multiply(num1, num2);
  } else if (operator === DIVIDE) {
    result = divide(num1, num2);
  }

  return result;
}

function clickNumbers(inputNum) {
  if (operator === "") {
    if (operand1 === "0") {
      operand1 = inputNum;
    } else {
      operand1 += inputNum;
    }
    display.textContent = `${operand1}`;
  } else {
    if (operand2 === "0") {
      operand2 = inputNum;
    } else {
      operand2 += inputNum;
    }
    display.textContent = `${operand1} ${operator} ${operand2}`;  
  }
}

function clickOperators(content) {
  if (operand2 === "0") {
    operator = content;
    display.textContent = `${operand1} ${operator}`;
  } else {
    operator = content;
    operand1 = operate(operand1, operand2, operator);
    operand2 = "0";
    display.textContent = `${operand1} ${operator}`;
  }
}

function clickLeftArrow() {
  if (operator === "" && operand2 === "0") {
    if (operand1.slice(0, operand1.length - 1) === "") {
      operand1 = "0";
    } else {
      operand1 = operand1.slice(0, operand1.length - 1);
    }
    display.textContent = `${operand1}`;

  } else if (operator !== "" && operand2 === "0") {
    operator = "";
    display.textContent = `${operand1}`;

  } else if (operand2 !== "0") {
    if (operand2.slice(0, operand2.length - 1) === "") {
      operand2 = 0;
      display.textContent = `${operand1} ${operator}`;
    } else {
      operand2 = operand2.slice(0, operand2.length - 1);
      display.textContent = `${operand1} ${operator} ${operand2}`;
    }
  }
}

function clickClear() {
  operand1 = "0";
  operand2 = "0";
  operator = "";

  display.textContent = `${operand1}`;
}

function clickEqual() {
  if (operand1 !== 0 && operator !== "") {
    operand1 = operate(operand1, operand2, operator);
    display.textContent = `${operand1}`;
  }
}

function clickDot() {
  if (operator === "" && operand2 === "0") {
    operand1 += ".";
    display.textContent = `${operand1}`;
  } else if (operator !== "") {
    operand2 += ".";
    display.textContent = `${operand1} ${operator} ${operand2}`;
  }
}

function clickButton(e) {
    const content = e.target.textContent;

    if (NUMBERS.includes(content)) {
      clickNumbers(content);
    } else if (OPERATORS.includes(content)) {
      clickOperators(content);
    } else if (content === LEFT_ARROW) {
      clickLeftArrow();
    } else if (content === CLEAR) {
      clickClear();
    } else if (content === EQUAL) {
      clickEqual();
    } else if (content === DOT) {
      clickDot();
    }
}


let operand1 = "0";
let operand2 = "0";
let operator = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", clickButton);
});

display.textContent = `${operand1}`;