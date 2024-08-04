let countdownFunction;

function startCountdown() {
    // Clear any existing countdown
    clearInterval(countdownFunction);

    // Get the user input time
    const daysInput = parseInt(document.getElementById('daysInput').value, 10);
    const hoursInput = parseInt(document.getElementById('hoursInput').value, 10);
    const minutesInput = parseInt(document.getElementById('minutesInput').value, 10);
    const secondsInput = parseInt(document.getElementById('secondsInput').value, 10);

    // Calculate the total time in milliseconds
    const countdownTime = (daysInput * 24 * 60 * 60 * 1000) +
                          (hoursInput * 60 * 60 * 1000) +
                          (minutesInput * 60 * 1000) +
                          (secondsInput * 1000);

    // Get the current time
    const now = new Date().getTime();
    const countdownDate = now + countdownTime;

    // Update the countdown every 1 second
    countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // If the countdown is over, stop the interval
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("days").innerHTML = '00';
            document.getElementById("hours").innerHTML = '00';
            document.getElementById("minutes").innerHTML = '00';
            document.getElementById("seconds").innerHTML = '00';
            alert("Countdown finished!");
        }
    }, 1000);
}
