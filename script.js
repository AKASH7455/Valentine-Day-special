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
  const question = document.querySelector(".question");
  const subtitle = document.querySelector(".subtitle");

  // text change
  question.textContent = "I LOVE YOU ❤️";
  subtitle.textContent = "Take a screenshot and send it to your partner.";

  // animation reset (important trick)
  question.classList.remove("text-animate");
  subtitle.classList.remove("text-animate");

  void question.offsetWidth; // force reflow
  void subtitle.offsetWidth;

  // animation add
  question.classList.add("text-animate");
  subtitle.classList.add("text-animate");
});

document.getElementById("yesBtn").addEventListener("click", fireConfetti);

function fireConfetti() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}
 
