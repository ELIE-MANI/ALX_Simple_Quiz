// Arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

// Utility function to get input values
function getInputs() {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;
  return { num1, num2 };
}

// Display function
function displayResult(value) {
  document.getElementById("calculation-result").textContent = value;
}

// Event listeners
document.getElementById("add").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  displayResult(add(num1, num2));
});

document.getElementById("subtract").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  displayResult(subtract(num1, num2));
});

document.getElementById("multiply").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  displayResult(multiply(num1, num2));
});

document.getElementById("divide").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  displayResult(divide(num1, num2));
});
