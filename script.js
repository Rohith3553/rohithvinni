const TARGET_NAME = "Vinni";
document.getElementById("who").textContent = TARGET_NAME;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const askCard = document.getElementById("askCard");
const yayCard = document.getElementById("yayCard");

const funnyNoMessages = ["Sure ah?", "Vinni, alochinchu!", "No kottaku 🥺", "Try again!", "Oops! 😂", "Wrong choice!"];

function moveNo() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    const x = Math.max(10, Math.floor(Math.random() * maxX));
    const y = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.textContent = funnyNoMessages[Math.floor(Math.random() * funnyNoMessages.length)];
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNo();
});

yesBtn.addEventListener("click", () => {
    askCard.classList.add("hidden");
    yayCard.classList.remove("hidden");
});
