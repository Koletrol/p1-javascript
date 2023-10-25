function checkBudget() {
  //Sets product price
  let product = 60;

  // Get the user's budget from the input field
  let budgetInput = document.getElementById("numbudget");
  let budget = parseFloat(budgetInput.value);

  //Get answer from html and store it as variable
  let asnwerElement = document.getElementById("answer");
  // isNaN checks if the answer is a number
  if (!isNaN(budget)) {
    //uses if/else
    if (budget >= product) {
      asnwerElement.style.color = "green";
      asnwerElement.textContent = "U heeft genoeg geld!";
    } else {
      asnwerElement.style.color = "red";
      asnwerElement.textContent = "Helaas, te weinig geld!";
    }
  }
}
