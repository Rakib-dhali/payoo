const number = "01234567890";
const pin = "1234";

document.getElementById("login-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("number").value;
  const inputPin = document.getElementById("pin").value;
  if (inputNumber === number && inputPin === pin) {
    alert("logged in successfully");
    window.location.replace("./home.html");
  } else {
    if (inputNumber === "" || inputPin == "") {
      alert("number or pin required");
    } else if (inputNumber.length < 11) {
      alert(`login failed. number must be 11 digits`);
    } else if (inputPin.length < 4) {
      alert("login failed. pin must be 4 digits");
    } else {
      alert("login failed. incorrect number or pin");
    }
  }
});
