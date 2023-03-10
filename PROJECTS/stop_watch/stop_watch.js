const startPause = document.getElementById('startStopBtn')
const reset = document.getElementById('resetBtn')

seconds = 0
minutes = 0
hours = 0

/* LeadingHours */

leadingseconds = 0
leadingminutes = 0
leadinghours = 0


function startWatch() {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0
        minutes++

        if (minutes / 60 === 1) {
            minutes= 0
            hours++
        }
    }

    if(leadingseconds < 10){
        leadingseconds = '0' + seconds.toString()
    }
    else{
        leadingseconds = seconds
    }

    if(leadingminutes < 10){
        leadingminutes = '0' + minutes.toString()
    }
    else{
        leadingminutes = minutes
    }

    if(leadinghours < 10){
        leadinghours = '0' + hours.toString()
    }
    else{
        leadinghours = hours
    }
    document.getElementById('timer').innerHTML = leadinghours + ":" + leadingminutes + ":" + leadingseconds
}

/* window.setInterval(startWatch,1000) */


timeInterval = 0
timeStatus = 'stopped'

startPause.addEventListener('click', function () {
    if (timeStatus === 'stopped') {
        timeInterval = window.setInterval(startWatch, 1000)
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timeStatus = 'started'
    }
    else {
        window.clearInterval(timeInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timeStatus = 'stopped'
    }
})

reset.addEventListener('click', function () {
    window.clearInterval(timeInterval)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
    timeStatus = 'stopped'
    document.getElementById('timer').innerHTML = "00:00:00"
})