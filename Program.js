import lessons from './lessons.json' assert {type: 'json'}

let timerSeconds = 1;
let timerDisplay = document.getElementById('timer')
let show = document.getElementById('kelkelkel');

function getClass() {
    let today = new Date();
    let day = today.getDay()
    let time = today.getHours() * 100 + today.getMinutes();
    let greet = 'Daily Program will be available here soon.';

    if (1 <= day && day <= 5 && time <= 1439) {
        lessons[day - 1].some(lesson => {
            if (time > lesson['time']) {
                greet = 'Next Class: ' + lesson['name']
                return true;
            }
        });
    } else if (day > 5 || day == 0) {
        greet = 'Have a Nice Weekend!'
    } else if (time > 1439) {
        greet = 'Next Class: Period X/End of School'
    }


    show.textContent = greet;
}

function timer() {
    timerSeconds--;
    timerDisplay.textContent = 'Next refresh in ' + timerSeconds + ' seconds'
    if (timerSeconds <= 0) {
        timerDisplay.textContent = 'Refreshing...'
        getClass();
        timerSeconds = 60
    }
}

setInterval(function () {
    timer();
}, 1000)

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        getClass();
    }
});
