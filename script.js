
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "zmyulovesjnt2703";

  if (input === correctPassword) {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("passwordInput").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.querySelector("p").innerHTML = "HAPPY 3 MONTHS BABY! 💖";
    launchHearts(); // 💖 Add this line
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

/* 💖 Heart Animation Function */
function launchHearts() {
  const heartContainer = document.getElementById("heart-container");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (1 + Math.random() * 1.5) + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}