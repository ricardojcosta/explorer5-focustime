function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown() {
   timerTimeOut = setTimeout(function () {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {
            resetControls()
            return
        }

        if (seconds <= 0) {
            seconds = 2
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)
}

//named export
export {countDown, resetTimer}