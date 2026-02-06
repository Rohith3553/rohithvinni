const TARGET_NAME = "Vinni";
document.getElementById("who").textContent = TARGET_NAME;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const askCard = document.getElementById("askCard");
const yayCard = document.getElementById("yayCard");

// Music Elements ni grab chestunnam
const noSound = document.getElementById("noSound");
const yesSound = document.getElementById("yesSound");

const funnyNoMessages = ["Sure ah?", "Vinni, alochinchu!", "No kottaku 🥺", "Try again!", "Oops! 😂"];

// No button move ayye logic
function moveNo() {
    // 🎵 Funny sound play avthundi
    if (noSound) {
        noSound.currentTime = 0;
        noSound.play().catch(e => console.log("Music blocked"));
    }

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
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNo(); });

// Celebration function: Confetti mariyu Hearts
function startCelebration() {
    const duration = 5 * 1000; // 5 seconds celebrations
    const end = Date.now() + duration;

    (function frame() {
        // Random hearts creation
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (Math.random() * 30 + 20) + "px";
        heart.style.zIndex = "1000";
        heart.style.transition
