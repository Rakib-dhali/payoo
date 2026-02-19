function getValue(id) {
  return document.getElementById(id).value;
}
function getInnerText(id) {
  return document.getElementById(id).textContent;
}

function getBalance() {
  return Number(document.getElementById("balance").textContent);
}

function setBalance(amount) {
  document.getElementById("balance").textContent = amount;
}

function showOnly(id) {
  const cashout = document.getElementById("cashout");
  const addMoney = document.getElementById("addmoney");
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
