var today = new Date();
var day = today.getDay()
if (day == 1){
    document.write("<img src='Prog/Mon.png'>")
}
else if (day == 2) {
    document.write("<img src='Prog/Tue.png'>")
}
else if (day == 3) {
    document.write("<img src='Prog/Wed.png'>")
}
else if (day == 4) {
    document.write("<img src='Prog/Thu.png'>")
}
else if (day == 5) {
    document.write("<img src='Prog/Fri.png'>")
}
else {
    document.write("<img src='Prog/rickroll.gif'>")
}
