document.getElementById('showMessageBtn').addEventListener('click', function() {
    document.getElementById('message').classList.toggle('hidden');
    this.textContent = this.textContent === "Click to Read Our Apology" ? "Hide Message" : "Click to Read Our Apology";
  });
  
  document.getElementById('goBackBtn').addEventListener('click', function() {
    window.history.back();
  });
  // Function to generate random confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    
    // Number of confetti particles
    const confettiCount = 50;
  
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
  
      // Randomize the position, size, and animation of confetti particles
      const size = Math.random() * 10 + 5; // Random size between 5px and 15px
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.left = `${Math.random() * 100}%`; // Random left position
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random fall duration between 2s to 4s
      confetti.style.animationDelay = `${Math.random() * 2}s`; // Random delay
  
      // Random color for confetti
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
      confettiContainer.appendChild(confetti);
    }
  }
  
  // Call createConfetti every few seconds to continuously add confetti particles
  setInterval(createConfetti, 3000); // Add new confetti every 3 seconds
  