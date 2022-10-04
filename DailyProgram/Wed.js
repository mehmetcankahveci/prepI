var today = new Date();
var time = today.getHours() * 100 + today.getMinutes();
var greet;

if (time > 1430) {
  greet = 'Next Class: Period X/End of School';
} else if (time > 1310) {
  greet = 'Next Class: Next Lesson: BA203/Literature';
} else if (time > 12) {
  greet = 'Next Class: Next Lesson: BA203/Communication';
} else if (time > 1030) {
    greet = 'Next Class: Next Lesson: GYM/PhysEd';
} else if (time > 950) {
    greet = 'Next Class: Next Lesson: BA201/Language';
} else if (time > 845) {
    greet = 'Next Class: Next Lesson: BA101/Literature';
} else if (time > 805) {
    greet = 'Next Class: Next Lesson: BA303/Language';
} else if (time > 700) {
    greet = 'Next Class: Next Lesson: YD/German,French,Spanish';
} else {
  greet = 'Something Wrong Dawg.';
}

var show = document.getElementById('kelkelkel');
show.textContent = greet;
