const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 20;

  const maxX =
    window.innerWidth - btnRect.width - padding;
  const maxY =
    window.innerHeight - btnRect.height - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Desktop (mouse)
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile (touch)
noBtn.addEventListener("touchstart", moveNoButton);

// Yes button click
yesBtn.addEventListener("click", () => {
  document.querySelector(".question").textContent =
    "I knew it ❤️";
  document.querySelector(".subtitle").textContent =
    "You just made my day!";
});