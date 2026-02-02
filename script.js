const noBtn = document.getElementById("noBtn");

// Handle Yes button → go to yes page
function handleYesClick() {
    window.location.href = "yes.html";
}

// When the mouse tries to click No, move the button
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
