function countdown() {
    const targetDate = new Date('2024-10-14T00:00:00');
    const now = new Date();

    if (now <= targetDate) {
        document.getElementById('countdown').innerHTML = "The date has not yet arrived!";
        return;
    }

    let years = now.getFullYear() - targetDate.getFullYear();
    let months = now.getMonth() - targetDate.getMonth();
    let days = now.getDate() - targetDate.getDate();
    let hours = now.getHours() - targetDate.getHours();
    let minutes = now.getMinutes() - targetDate.getMinutes();
    let seconds = now.getSeconds() - targetDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById('countdown').innerHTML = 
        `${months} miesięcy, ${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund!!`;

    setTimeout(countdown, 1000);
}

window.onload = countdown;