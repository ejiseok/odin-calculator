const PLUS = "+";
const MINUS = "−";
const TIMES = "×";
const DIVIDE = "÷";
const LEFT_ARROW = "←";
const CLEAR = "C";
const OPERATORS = "+−×÷+-*/";
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
  return (num1 / num2).toFixed(3);
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
  } else if (operator === DIVIDE && num2 !== 0) {
    result = divide(num1, num2);
  } else if (operator === DIVIDE && num2 === 0) {
    return "안돼";
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
  if (operator !== "" && operand2 === "0") {
    return;
  }

  if (operator === "") {
    operator = content;
    display.textContent = `${operand1} ${operator}`;
  } else {
    operand1 = operate(operand1, operand2, operator);
    operand2 = "0";
    operator = content;
    display.textContent = `${operand1} ${operator}`;
  }

  dotButton.disabled = false;
}

function clickLeftArrow() {
  if (operator === "" && operand2 === "0") {
    if (operand1.slice(0, operand1.length - 1) === "") {
      operand1 = "0";
    } else {
      operand1 = operand1.slice(0, operand1.length - 1);
    }
    display.textContent = `${operand1}`;

    if (!operand1.includes(".")) {
      dotButton.disabled = false;
    }

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

    if (!operand2.includes(".")) {
      dotButton.disabled = false;
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
    dotButton.disabled = true;
    display.textContent = `${operand1}`;
  } else if (operator !== "") {
    operand2 += ".";
    dotButton.disabled = true;
    display.textContent = `${operand1} ${operator} ${operand2}`;
  }
}

function action(content) {
  if (NUMBERS.includes(content)) {
    clickNumbers(content);
  } else if (OPERATORS.includes(content)) {
    clickOperators(content);
  } else if (content === LEFT_ARROW) {
    clickLeftArrow();
  } else if (content === CLEAR) {
    clickClear();
  } else if (content === EQUAL || content === "Enter") {
    clickEqual();
  } else if (content === DOT) {
    clickDot();
  }
}

function clickButton(e) {
  const content = e.target.textContent;
  action(content);
}

function pressKeydown(e){
  const content = e.key;
  action(content);
}

let operand1 = "0";
let operand2 = "0";
let operator = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const dotButton = Array.from(buttons).find(button => button.textContent === ".");

buttons.forEach(button => {
  button.addEventListener("click", clickButton);
});

document.addEventListener("keydown", pressKeydown);

display.textContent = `${operand1}`;
