var today = new Date();
var time = today.getHours() * 100 + today.getMinutes();
var greet;

if (time >= 000) {
  greet = 'Have a Nice Weekend!';
}
var show = document.getElementById('kelkelkel');
show.textContent = greet;
