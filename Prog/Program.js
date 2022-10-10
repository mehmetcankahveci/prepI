var today = new Date();
var day = today.getDay()
var time = today.getHours() * 100 + today.getMinutes();
var greet;
if (day == 1) {
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
}
else if (day == 2) {
    if (time > 1430) {
        greet = 'Next Class: Period X/End of School';
    } else if (time > 1310) {
        greet = 'Next Class: : BO210/Turkce';
    } else if (time > 12) {
        greet = 'Next Class: : BA201/Guidance';
    } else if (time > 1030) {
        greet = 'Next Class: : BA201/Language';
    } else if (time > 950) {
        greet = 'Next Class: : BA202/Communication';
    } else if (time > 845) {
        greet = 'Next Class: EK29/CS';
    } else if (time > 805) {
        greet = 'Next Class: : BA101/Literature';
    } else if (time > 700) {
        greet = 'Next Class: : YD/German,French,Spanish';
    } else {
  greet = 'Daily Program will be available here soon.';
} 
}
else if (day == 3) {
    if (time > 1430) {
        greet = 'Next Class: Period X/End of School';
    } else if (time > 1310) {
        greet = 'Next Class: BA203/Literature';
    } else if (time > 12) {
        greet = 'Next Class: BA203/Communication';
    } else if (time > 1030) {
        greet = 'Next Class: GYM/PhysEd';
    } else if (time > 950) {
        greet = 'Next Class: BA201/Language';
    } else if (time > 845) {
        greet = 'Next Class: : BA101/Literature';
    } else if (time > 805) {
        greet = 'Next Class: : BA303/Language';
    } else if (time > 700) {
        greet = 'Next Class: : YD/German,French,Spanish';
    } else {
        greet = 'Daily Program will be available here soon.';
    }
}
else if (day == 4) {
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
}
else if (day == 5) {
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
}
else if (day == 6) {
    if (time >= 000) {
        greet = 'Have a Nice Weekend!';
      }
}
else {
    if (time >= 000) {
        greet = 'Have a Nice Weekend!';
      }
}

var show = document.getElementById('kelkelkel');
show.textContent = greet;

