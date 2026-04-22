function updateCountdown() {
    const targetDate = new Date('2027-03-24T09:00:00+01:00');
    const now = new Date();
    let difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    document.getElementById('seconds').textContent = totalSeconds.toLocaleString('nb-NO');
}

let previousValue = 0;

function updateCountdownWithAnimation() {
    updateCountdown();
    const currentValue = document.getElementById('seconds').textContent;
    if (currentValue !== previousValue) {
        const element = document.getElementById('seconds');
        element.style.transform = 'scale(1.05)';
        setTimeout(() => { element.style.transform = 'scale(1)'; }, 200);
    }
    previousValue = currentValue;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCountdownWithAnimation();
    setInterval(updateCountdownWithAnimation, 1000);
});