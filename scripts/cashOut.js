const pin = "1234";
document.getElementById("Withdraw-btn").addEventListener("click", () => {
  const agentNumber = getValue("agentNumber");
  const cashOutAmount = Number(getValue("cashOutAmount"));
  const cashOutPin = getValue("cashOutPin");
  let balance = getBalance();
  let newBalance;
  if (agentNumber === "" || cashOutAmount === "" || cashOutPin === "") {
    alert("All fields are required");
  } else if (agentNumber.length < 11) {
    alert("Agent number must be 11 digits");
  } else if (cashOutPin.length < 4) {
    alert("PIN must be 4 digits");
  } else if (cashOutAmount > balance) {
    alert("Insufficient balance");
  } else if (cashOutPin !== pin) {
    alert("Incorrect PIN");
  } else {
    newBalance = balance - cashOutAmount;
    setBalance(newBalance);
    alert(
      `You have successfully withdrawn ${cashOutAmount}. Your new balance is ${newBalance}`,
    );

    const history = document.getElementById("history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="flex items-center gap-4">
        <img src="./assets/opt-2.png" alt="">
        <div>
          <p>cashout</p>
          <p>today at <span> ${new Date().getDate()} </span></p>
        </div>
      </div>
      `;
    history.appendChild(newHistory);
  }
});
