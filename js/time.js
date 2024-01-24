    // Initial countdown value
    let countdown = 30;

    // Function to update the timer display
    function updateTimer() {
        document.getElementById("timer").textContent = countdown;
    }

    // Function to handle the countdown
    function countdownFunction() {
        updateTimer(); // Initial display

        // Update the timer every second
        const countdownInterval = setInterval(function() {
            countdown--;

            if (countdown <= 0) {
                clearInterval(countdownInterval); // Stop the countdown
                window.close(); // Close the page
            } else {
                updateTimer(); // Update the timer display
            }
        }, 1000);
    }

    // Start the countdown when the page loads
    window.onload = countdownFunction;

