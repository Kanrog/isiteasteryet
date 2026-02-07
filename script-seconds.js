// Countdown Timer Script - Seconds Only
// Target: Monday, March 30, 2026, 18:00:00 Oslo timezone

function updateCountdown() {
    // Set the target date and time in Oslo timezone
    const targetDate = new Date('2026-03-30T18:00:00+01:00'); // Oslo is CET (UTC+1) in March
    
    // Get current time
    const now = new Date();
    
    // Calculate the difference in milliseconds
    let difference = targetDate - now;
    
    // If the target date has passed
    if (difference <= 0) {
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    // Calculate total seconds
    const totalSeconds = Math.floor(difference / 1000);
    
    // Update the DOM with formatted number (add commas for readability)
    document.getElementById('seconds').textContent = totalSeconds.toLocaleString('nb-NO');
}

// Add visual feedback when number changes
let previousValue = 0;

function updateCountdownWithAnimation() {
    updateCountdown();
    
    const currentValue = document.getElementById('seconds').textContent;
    
    if (currentValue !== previousValue) {
        const element = document.getElementById('seconds');
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }
    
    previousValue = currentValue;
}

// Initialize the countdown
document.addEventListener('DOMContentLoaded', function() {
    updateCountdownWithAnimation();
    setInterval(updateCountdownWithAnimation, 1000);
});
