var today = new Date();
var day = today.getDay()
var time = today.getHours() * 100 + today.getMinutes();
import lessons from './lessons.json' assert {type: 'json'}

function getClass() {
    let greet = 'Daily Program will be available here soon.';

    if (day <= 5 && time <= 1439) {
        lessons[day - 1].some(lesson => {
            if (time > lesson['time']) {
                greet = 'Next Class: ' + lesson['name']
                return true;
            }
        });
    }
    else if (day > 5) {
        greet = 'Have a Nice Weekend!'
    }
    else if (time > 1439) {
        greet = 'Next Class: Period X/End of School'
    }


    var show = document.getElementById('kelkelkel');
    show.textContent = greet;
}

getClass();

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        getClass();
    }
});
