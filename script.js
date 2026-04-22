// Countdown Timer Script
// Target: Tuesday, March 24, 2027, 09:00:00 Oslo timezone

function padNumber(num) {
    return num.toString().padStart(2, '0');
}

let previousValues = {
    months: '',
    weeks: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
};

function updateCountdown() {
    const targetDate = new Date('2027-03-24T09:00:00+01:00');
    const now = new Date();
    let difference = targetDate - now;

    if (difference <= 0) {
        ['months','weeks','days','hours','minutes','seconds'].forEach(id => {
            document.getElementById(id).textContent = '00';
        });
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const months = Math.floor(totalDays / 30.44);
    let remainingDays = totalDays % 30.44;
    const weeks = Math.floor(remainingDays / 7);
    remainingDays = Math.floor(remainingDays % 7);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const currentValues = {
        months: padNumber(months),
        weeks: padNumber(weeks),
        days: padNumber(remainingDays),
        hours: padNumber(hours),
        minutes: padNumber(minutes),
        seconds: padNumber(seconds)
    };

    Object.keys(currentValues).forEach(key => {
        const element = document.getElementById(key);
        element.textContent = currentValues[key];

        if (currentValues[key] !== previousValues[key]) {
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    });

    previousValues = currentValues;
}

updateCountdown();
setInterval(updateCountdown, 1000);
