
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "zmyulovesjnt2703";

  if (input === correctPassword) {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("passwordInput").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.querySelector("p").innerHTML = "HAPPY 3 MONTHS BABY! 💖";
  } else {
    alert("Wrong password! Try again.");
    document.getElementById("passwordInput").value = "";
  }
}

// Allow Enter key to submit password
document.getElementById('passwordInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
});
