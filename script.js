// Set the launch date (30 days from current date)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

// Update the countdown timer every second
const timer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the launch date
    const distance = launchDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}, 1000);

// Add leading zero if number is less than 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Add some animation and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle hover effects to countdown boxes
    const timeBoxes = document.querySelectorAll('.time-section span');
    
    timeBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        box.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add a subtle background animation
    const container = document.querySelector('.container');
    let posX = 0;
    let posY = 0;
    
    document.addEventListener('mousemove', function(e) {
        posX = e.clientX / window.innerWidth - 0.5;
        posY = e.clientY / window.innerHeight - 0.5;
        
        container.style.background = `linear-gradient(
            ${135 + posX * 10}deg, 
            var(--secondary-color) ${0 + posY * 10}%, 
            var(--accent-color) ${100 + posX * 10}%
        )`;
    });
    
    // Add subtle animation to the construction icon
    const constructionIcon = document.querySelector('.construction-icon');
    setInterval(() => {
        constructionIcon.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(230, 57, 70, 0.6)`;
    }, 2000);
});