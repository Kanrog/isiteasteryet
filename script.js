// Countdown Timer Script
// Target: Monday, March 30, 2026, 18:00:00 Oslo timezone

function updateCountdown() {
    // Set the target date and time in Oslo timezone
    const targetDate = new Date('2026-03-30T18:00:00+01:00'); // Oslo is CET (UTC+1) in March
    
    // Get current time
    const now = new Date();
    
    // Calculate the difference in milliseconds
    const difference = targetDate - now;
    
    // If the target date has passed
    if (difference <= 0) {
        document.getElementById('months').textContent = '0';
        document.getElementById('weeks').textContent = '0';
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    // Calculate time units
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    // Calculate months (approximately 30.44 days)
    const months = Math.floor(days / 30.44);
    const remainingDaysAfterMonths = days % 30.44;
    
    // Calculate weeks from remaining days
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const remainingDays = Math.floor(remainingDaysAfterMonths % 7);
    
    // Calculate remaining hours, minutes, seconds
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    
    // Update the DOM
    document.getElementById('months').textContent = months;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('days').textContent = remainingDays;
    document.getElementById('hours').textContent = remainingHours;
    document.getElementById('minutes').textContent = remainingMinutes;
    document.getElementById('seconds').textContent = remainingSeconds;
}

// Function to pad numbers with leading zeros
function padNumber(num) {
    return num.toString().padStart(2, '0');
}

// Enhanced countdown update with proper formatting
function updateCountdownFormatted() {
    // Set the target date and time in Oslo timezone
    const targetDate = new Date('2026-03-30T18:00:00+01:00'); // Oslo is CET (UTC+1) in March
    
    // Get current time
    const now = new Date();
    
    // Calculate the difference in milliseconds
    let difference = targetDate - now;
    
    // If the target date has passed
    if (difference <= 0) {
        document.getElementById('months').textContent = '00';
        document.getElementById('weeks').textContent = '00';
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
    
    // Calculate months (approximately 30.44 days)
    const months = Math.floor(totalDays / 30.44);
    let remainingDays = totalDays % 30.44;
    
    // Calculate weeks from remaining days
    const weeks = Math.floor(remainingDays / 7);
    remainingDays = Math.floor(remainingDays % 7);
    
    // Calculate remaining hours, minutes, seconds
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    
    // Update the DOM with padded numbers
    document.getElementById('months').textContent = padNumber(months);
    document.getElementById('weeks').textContent = padNumber(weeks);
    document.getElementById('days').textContent = padNumber(remainingDays);
    document.getElementById('hours').textContent = padNumber(hours);
    document.getElementById('minutes').textContent = padNumber(minutes);
    document.getElementById('seconds').textContent = padNumber(seconds);
}

// Initialize the countdown
document.addEventListener('DOMContentLoaded', function() {
    // Update immediately
    updateCountdownFormatted();
    
    // Update every second
    setInterval(updateCountdownFormatted, 1000);
});

// Add some visual feedback when numbers change
let previousValues = {
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};

function updateCountdownWithAnimation() {
    updateCountdownFormatted();
    
    // Add animation class to changed values
    const currentValues = {
        months: document.getElementById('months').textContent,
        weeks: document.getElementById('weeks').textContent,
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

// Use the animated version for better UX
document.addEventListener('DOMContentLoaded', function() {
    updateCountdownWithAnimation();
    setInterval(updateCountdownWithAnimation, 1000);
});
