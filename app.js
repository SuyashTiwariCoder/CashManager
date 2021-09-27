let billAmount = document.querySelector("#billAmount");
let cashGiven = document.querySelector("#cashGiven");
let checkBtn = document.querySelector("#checkBtn");
let message = document.querySelector("#message");
let notesToShow = document.querySelectorAll(".numberOfNotes");
let table = document.querySelector(".table");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function clickEventHandler() {
  message.style.display = "none";
  if (Number(billAmount.value) > 0 && Number(cashGiven.value) > 0) {
    if (Number(cashGiven.value) > Number(billAmount.value)) {
      const amountToReturn = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToReturn);
    } else if(Number(billAmount.value) === Number(cashGiven.value)){
          showMessage('No pain no gain ')}
          else {
      showMessage("The Bill amount can not be greater than cash amount  ");
    }
  
  }
  
  else {
    alert("Invalid Amont , Values must be positive or greater than zero");
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
