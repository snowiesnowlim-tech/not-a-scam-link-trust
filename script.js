const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");
const catImg = document.getElementById("catImg");

function moveButton() {
    // Switches to absolute so it can fly around the whole screen
    noBtn.style.position = "absolute"; 
    
    // Calculates a random spot on the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Mouse for computer, touch for phone
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "YAYY!! I KNEW YOU'D SAY YES <3"; 
    // Celebration GIF
    catImg.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnk1Y2VpZndreGZqZndueGZqZndueGZqZndueGZqZndueGZqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZ2VpZCZjdD1n/LndvW86wAtzC5KzX4p/giphy.gif"; 
    
    // Hide the No button and the shy text
    noBtn.style.display = "none"; 
    document.getElementById("bottomText").style.display = "none";
});
