const PLUS = "+";
const MINUS = "−";
const TIMES = "×";
const DIVIDE = "÷";
const LEFT_ARROW = "←";
const CLEAR = "C";
const OPERATORS = "+−×÷";
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
  let num1 = parseInt(operand1);
  let num2 = parseInt(operand2);

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


let operand1;
let operand2;
let operator;

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const content = e.target.textContent;

    if (NUMBERS.includes(content)) {

    } else if (OPERATORS.includes(content)) {

    }
  });
});