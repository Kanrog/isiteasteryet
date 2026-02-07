// Countdown Timer Script - Days, Hours, Minutes, Seconds
// Target: Monday, March 30, 2026, 18:00:00 Oslo timezone

function padNumber(num) {
    return num.toString().padStart(2, '0');
}

function updateCountdownFormatted() {
    // Set the target date and time in Oslo timezone
    const targetDate = new Date('2026-03-30T18:00:00+01:00'); // Oslo is CET (UTC+1) in March
    
    // Get current time
    const now = new Date();
    
    // Calculate the difference in milliseconds
    let difference = targetDate - now;
    
    // If the target date has passed
    if (difference <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    // Calculate time units
    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    // Calculate remaining hours, minutes, seconds
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    
    // Update the DOM with padded numbers
    document.getElementById('days').textContent = padNumber(totalDays);
    document.getElementById('hours').textContent = padNumber(hours);
    document.getElementById('minutes').textContent = padNumber(minutes);
    document.getElementById('seconds').textContent = padNumber(seconds);
}

// Add visual feedback when numbers change
let previousValues = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};

function updateCountdownWithAnimation() {
    updateCountdownFormatted();
    
    // Add animation class to changed values
    const currentValues = {
        days: document.getElementById('days').textContent,
        hours: document.getElementById('hours').textContent,
        minutes: document.getElementById('minutes').textContent,
        seconds: document.getElementById('seconds').textContent
    };
    
    Object.keys(currentValues).forEach(key => {
        if (currentValues[key] !== previousValues[key]) {
            const element = document.getElementById(key);
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    });
    
    previousValues = currentValues;
}

// Initialize the countdown
document.addEventListener('DOMContentLoaded', function() {
    updateCountdownWithAnimation();
    setInterval(updateCountdownWithAnimation, 1000);
});
