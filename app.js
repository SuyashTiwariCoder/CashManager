let billAmount = document.querySelector("#billAmount");
let cashGiven = document.querySelector("#cashGiven");
let checkBtn = document.querySelector("#checkBtn");
let message = document.querySelector("#message");
let notesToShow = document.querySelectorAll(".numberOfNotes");
const availableNotes = [2000, 1000, 500, 100, 50, 20, 10, 5, 1];
checkBtn.addEventListener("click", function clickEventHandler() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      const amountToReturn = cashGiven.value - billAmount.value;
      calculateChange(amountToReturn);
    } else {
      showMessage("The Bill amount can not be greater than cash amount  ");
    }
  } else {
    showMessage("Invalid Bill Amount ");
  }
});

function calculateChange(amountToReturn) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToReturn / availableNotes[i]);

    amountToReturn = amountToReturn % availableNotes[i];
    notesToShow[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
