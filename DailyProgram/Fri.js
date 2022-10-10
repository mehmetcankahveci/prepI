var today = new Date();
var time = today.getHours() * 100 + today.getMinutes();
var greet;

if (time > 1415) {
  greet = 'Next Class: Period X/End of School';
} else if (time > 1230) {
    greet = 'BO210/Turkce';  
} else if (time > 1150) {
  greet = 'Next Class: BA202/Language';
} else if (time > 950) {
    greet = 'Next Class: BA003/Literature';
} else if (time > 845) {
    greet = 'Next Class: BA201/Communication';
} else if (time > 805) {
    greet = 'Next Class: EK27/CS';
} else if (time > 500) {
    greet = 'Next Class: MA301/Science';
} else {
  greet = 'Daily Program will be available here soon.';
}

var show = document.getElementById('kelkelkel');
show.textContent = greet;
