document.getElementById("addMoney-btn").addEventListener("click", () => {
  const bankName = getInnerText("bankName");
  const accountNumber = getValue("bankNumber");
  const amountToAdd = Number(getValue("addAmount"));
  const addMoneyPin = getValue("addMoneyPin");
  const pin = "1234";
  let balance = getBalance();
  let newBalance;
  if (bankName === "" || accountNumber === "" || amountToAdd === "") {
    alert("All fields are required");
  } else if (bankName === "cho0se one") {
    alert("Please select a bank");
  } else if (accountNumber.length < 11) {
    alert("Account number must be at least 11 digits");
  } else if (amountToAdd <= 0) {
    alert("Amount must be greater than zero");
  } else if (addMoneyPin.length < 4) {
    alert("PIN must be 4 digits");
  } else if (addMoneyPin !== pin) {
    alert("Incorrect PIN");
  } else {
    newBalance = balance + amountToAdd;
    setBalance(newBalance);
    alert(
      `You have successfully added ${amountToAdd}. Your new balance is ${newBalance}`,
    );
    const history = document.getElementById("history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="flex items-center gap-4">
        <img src="./assets/opt-1.png" alt="">
        <div>
          <p>add money</p>
          <p>today at <span> ${new Date().toLocaleString()} </span></p>
        </div>
      </div>
      `;
    history.appendChild(newHistory);
  }
});
