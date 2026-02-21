const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

noBtn.addEventListener('mouseover', () => {
    // Generate random coordinates within window bounds
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;
    
    // Ensure the new position is reasonably far from the mouse
    const x = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const y = Math.max(0, Math.min(Math.random() * maxY, maxY));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Nice try, but you still have to say yes! 😉");
});

yesBtn.addEventListener('click', () => {
    // Confetti effect
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    // Balloons effect
    for(let i=0; i<30; i++) {
        setTimeout(createBalloon, i * 100);
    }
    
    // Change subtitle text
    document.querySelector('.sub-title').innerHTML = "YAYYY! I Love You! 🎉❤️🥰";
    
    // Make no button disappear
    noBtn.style.display = 'none';
});

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerHTML = ['🎈', '💖', '💝', '💗', '💓'][Math.floor(Math.random() * 5)];
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 5000);
}
