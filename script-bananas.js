function updateCountdown() {
    const targetDate = new Date('2027-03-24T09:00:00+01:00');
    const now = new Date();
    let difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('bananas').textContent = '0';
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    
    // 1 Day = 86,400 seconds. 
    // If a human needs ~2000 kcal (20 bananas) per day:
    // 86,400 / 20 = 4,320 seconds per banana.
    const bananasRemaining = (totalSeconds / 4320).toFixed(1);

    document.getElementById('bananas').textContent = parseFloat(bananasRemaining).toLocaleString('nb-NO');
}

let previousValue = 0;

function updateCountdownWithAnimation() {
    updateCountdown();
    const currentValue = document.getElementById('bananas').textContent;
    if (currentValue !== previousValue) {
        const element = document.getElementById('bananas');
        element.style.transform = 'scale(1.05)';
        setTimeout(() => { element.style.transform = 'scale(1)'; }, 200);
    }
    previousValue = currentValue;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCountdownWithAnimation();
    setInterval(updateCountdownWithAnimation, 1000);
});