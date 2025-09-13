
/// Actiuly !! this code : How To Switch The (( MODE From Light TO Dark )) I Take It From YouTube
//Resource : https://youtu.be/CUEJkJ9HDbY?si=wPP4TJNt0AOJkorZ


const toggleBtn = document.getElementById ("mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});