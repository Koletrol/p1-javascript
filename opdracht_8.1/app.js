let answer = document.getElementById("answer");

function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (num1 < 0) {
    let result = (answer.textContent =
      "Het antwoord is: " + "Voeg een geldig cijfer in.");
  }
  if (num2 < 0) {
    let result = (answer.textContent =
      "Het antwoord is: " + "Voeg een geldig cijfer in.");
  } else {
    let result = num1 + num2;
    console.log(result);
    answer.textContent = "Het antwoord is: " + result;
  }
}

function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 - num2;
  console.log(result);
  answer.textContent = "Het antwoord is: " + result;
}

function multiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 * num2;
  console.log(result);
  answer.textContent = "Het antwoord is: " + result;
}
function divide() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 / num2;
  console.log(result);
  answer.textContent = "Het antwoord is: " + result;
}
