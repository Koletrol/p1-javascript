let modal = document.getElementById("myModal");
let btn = document.getElementById("mybtn");
let span = document.getElementsByClassName("close")[0];
let modalText = document.getElementById("modalText");


/* to open the modal */
btn.onclick = function () {
  modal.style.display = "block";
};

/* closes the modal */
span.onclick = function () {
  modal.style.display = "none";
};

/* get age */

function checkAge() {
  let age = parseFloat(document.getElementById("age").value);
  if (age < 18) {
    modalText.textContent = "Helaas, je bent te jong.";
    modal.style.display = "block";
  } else {
    window.location.href = "https://www.marxists.org/";
  }
}
