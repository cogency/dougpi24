let countdownElement = document.getElementById('countdown');
let audio;
let countdownTimer;

// Function to handle "Start" button: play song, show countdown
function startPlayback() {
    // Reset previous audio if playing
    stopPlayback();

    // Start countdown display and audio playback
    countdownElement.style.display = 'block';
    let countdownTime = 60;
    countdownElement.textContent = countdownTime;

    audio = new Audio('mp3/csai_1min_reverbs.mp3');

    // Sync countdown timer with playback time
    countdownTimer = setInterval(() => {
        countdownTime--;
        countdownElement.textContent = countdownTime;
        
        // Stop countdown at zero
        if (countdownTime == 0) {
            countdownElement.style.display = 'none';
        }

        if (countdownTime<0) {
            clearInterval(countdownTimer);
            countdownElement.style.display = 'none';
            audio.pause();
        }
    }, 1000);

    audio.play();
}

// Function to handle "Reset" button: stop playback, hide countdown
function resetPlayback() {
    stopPlayback();
    countdownElement.style.display = 'none';
}

// Function to handle "Recall" button: play song without affecting countdown
function recallPlayback() {
    stopPlayback();

    audio = new Audio('mp3/over-the-line.mp3');
    audio.play();
}

// Helper function to stop any ongoing playback and countdown
function stopPlayback() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }
}


