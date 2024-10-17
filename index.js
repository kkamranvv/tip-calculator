const btnEl = document.getElementById("calculate");

const billInput = document.getElementById("bill");

const tipInput = document.getElementById("tip");

const totalSpan = document.getElementById("total");

const tryAgainEl = document.getElementById("try-again");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

function tryAgain() {
  billInput.value = "";
  tipInput.value = "";
  totalSpan.textContent = "";
}

btnEl.addEventListener("click", calculateTotal);

tryAgainEl.addEventListener("click", tryAgain);
