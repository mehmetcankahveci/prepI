var today = new Date();
var time = today.getHours() * 100 + today.getMinutes();
var greet;

if (time > 1415) {
  greet = 'Next Class: Period X/End of School';
} else if (time > 1230) {
    greet = 'YD/German, French, Spanish';  
} else if (time > 1150) {
  greet = 'Next Class: BA104/Literature';
} else if (time > 950) {
    greet = 'Next Class: BO210/Turkce';
} else if (time > 845) {
    greet = 'Next Class: BA203/Language';
} else if (time > 805) {
    greet = 'Next Class: MO101/Science';
} else if (time > 500) {
    greet = 'Next Class: MA303/Maths';
} else {
  greet = 'Daily Program will be available here soon.';
}

var show = document.getElementById('kelkelkel');
show.textContent = greet;
