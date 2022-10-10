var today = new Date();
var time = today.getHours() * 100 + today.getMinutes();
var greet;

if (time > 1415) {
  greet = 'Next Class: Period X/End of School';
} else if (time > 1230) {
    greet = 'Next Class: Art';  
} else if (time > 1150) {
  greet = 'Next Class: BA203/Communication';
} else if (time > 1030) {
    greet = 'Next Class: MA303/Maths';
} else if (time > 950) {
    greet = 'Next Class: BO210/Turkce';
} else if (time > 845) {
    greet = 'Next Class: YD/German, French, Spanish';
} else if (time > 805) {
    greet = 'Next Class: BA201/Language';
} else if (time > 500) {
    greet = 'Next Class: BA101/Literature';
} else {
  greet = 'Daily Program will be available here soon.';
}

var show = document.getElementById('kelkelkel');
show.textContent = greet;
